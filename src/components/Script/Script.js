import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as battleApi from '../../api/battle';
import * as itemApi from '../../api/item';

const Script = ({ mapInfo, onBattle, setOnBattle, setMapInfo, setStatus, setInventory }) => {
  const [turn, setTurn] = useState(1);
  const [canEscape, setCanEscape] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [monsterHp, setMonsterHp] = useState(-1);

  const history = useHistory();

  const initialize = () => {
    setTurn(1);
    setCanEscape(false);
    setIsFinished(false);
    setMonsterHp(-1);
  };

  const attackMonster = async () => {
    try {
      const { id: monsterId } = mapInfo;
      const result = await battleApi.getAttackResult(turn, monsterId, monsterHp);
      setMonsterHp(result.monsterHp);

      if (result.isEnded) {
        initialize();
      }

      if (result.canEscape) {
        setCanEscape(true);
        setTurn(turn + 1);
      }

      if (result.isVictory) {
        setOnBattle(false);
        initialize();
      }

      if (result.isFinished) {
        setTurn(1);
        setOnBattle(true); // 이동하지 못하도록
        setIsFinished(true);
        setMonsterHp(-1);
      }

      setStatus(result.userInfo);
      setMapInfo({ ...mapInfo, message: result.message });

      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  const escape = async () => {
    try {
      const result = await battleApi.escape();
      setTurn(1);
      initialize();
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  const getItem = async () => {
    try {
      const { id: itemId } = mapInfo;
      const result = await itemApi.getItem(itemId);
      const userInventory = [];
      result.userInfo.items.forEach((item) => {
        userInventory.push({ id: item.id, name: item.name, quantity: item.quantity });
      });

      setInventory(userInventory);
      setStatus(result.userInfo);
      setMapInfo(result);

      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  const renderItemMapButton = () => {
    return (
      <button className='Script__btn' type='button' onClick={getItem}>
        아이템 얻기
      </button>
    );
  };

  const renderAttackAndEscapeButton = () => {
    return (
      <>
        {renderAttackButton()}
        {canEscape && renderEscapeButton()}
      </>
    );
  };

  const renderAttackButton = () => {
    return (
      <button className='Script__btn Script__btn--1' type='button' onClick={attackMonster}>
        공격하기
      </button>
    );
  };

  const renderEscapeButton = () => {
    <button className='Script__btn Script__btn--2' type='button' onClick={escape}>
      도망가기
    </button>;
  };

  const renderBattleButton = () => {
    if (canEscape) return renderAttackAndEscapeButton();
    return renderAttackButton();
  };

  const finishGame = () => {
    history.push('/end');
  };

  const renderFinishButton = () => {
    return (
      <button className='Script__btn Script__btn--2' type='button' onClick={finishGame}>
        결혼....
      </button>
    );
  };
  return (
    <div className='Script'>
      <h1 className='Script__title'>Event</h1>
      <div className='Script__desc'>
        <div className='Script__map'>{mapInfo.event}</div>
        {mapInfo.event === 'item' ? <div>{mapInfo.name}을(를) 발견했다!</div> : <></>}
        <div className='Script__text'>{mapInfo.message}</div>
      </div>
      <div className='Script__btnContainer'>
        {mapInfo.event === 'item' && renderItemMapButton()}
        {!isFinished && onBattle && mapInfo.event === 'battle' && renderBattleButton()}
        {isFinished && renderFinishButton()}
      </div>
    </div>
  );
};

export default Script;
