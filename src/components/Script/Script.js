import React, { useState, useEffect } from 'react';
import * as battleApi from '../../api/battle';
import * as itemApi from '../../api/item';
import * as startApi from '../../api/start';

const Script = ({ mapInfo, setOnBattle }) => {
  const [turn, setTurn] = useState(1);
  const [isEnded, setIsEnded] = useState(false);
  const [canEscape, setCanEscape] = useState(false);

  useEffect(() => {
    if (mapInfo.event === 'battle') {
      setOnBattle(true);
    }
  }, [mapInfo, setOnBattle]);

  const attackMonster = async () => {
    try {
      const { id: monsterId } = mapInfo;
      const result = await battleApi.getAttackResult(turn, monsterId);

      if (result.isEnded) {
        setIsEnded(true);
      } else if (result.canEscape) {
        setCanEscape(true);
      } else if (result.isVictory) {
        setOnBattle(false);
      } else {
        setTurn(turn + 1);
      }
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  const escape = async () => {
    try {
      const result = await battleApi.escape();
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  const getItem = async () => {
    try {
      const { itemId } = mapInfo;
      const result = await itemApi.getItem(itemId);
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  const restartGame = async () => {
    try {
      const result = await startApi.restartGame();
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

  const renderBattleMapButton = () => {
    return (
      <>
        <button className='Script__btn Script__btn--1' type='button' onClick={attackMonster}>
          공격하기
        </button>
        {canEscape && (
          <button className='Script__btn Script__btn--2' type='button' onClick={escape}>
            도망가기
          </button>
        )}
      </>
    );
  };

  const renderRestartButton = () => {
    return (
      <button className='Script__btn' type='button' onClick={restartGame}>
        다시 시작하기
      </button>
    );
  };

  return (
    <div className='Script'>
      <h1 className='Script__title'>Event</h1>
      <div className='Script__desc'>
        <div className='Script__map'>{mapInfo.event}</div>
        <div className='Script__text'>{mapInfo.message}</div>
      </div>
      <div className='Script__btnContainer'>
        {mapInfo.event === 'battle' && isEnded
          ? renderRestartButton()
          : mapInfo.event === 'battle' && !isEnded
          ? renderBattleMapButton()
          : mapInfo.event === 'item' && renderItemMapButton()}
      </div>
    </div>
  );
};

export default Script;
