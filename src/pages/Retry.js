import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as startApi from '../api/start';

const Retry = ({ setStartInfo }) => {
  const [trial, setTrial] = useState(1);
  const [ability, setAbility] = useState({
    str: 10,
    def: 5,
  });
  const [message, setMessage] = useState('');
  const history = useHistory();

  const startGame = async () => {
    const res = await startApi.startGame();
    setStartInfo(res);
    history.push('/play');
  };

  const retrySetting = async () => {
    try {
      const res = await startApi.retrySetting(trial);
      if (res.error) {
        console.error(res);
        setMessage(res.error);
      } else {
        setTrial(res.remainTurn);
        setAbility(res.userInfo);
        setMessage(res.message);
      }
      setTrial(trial + 1);
    } catch (err) {
      setMessage('능력치를 재설정 할 수 없습니다.');
    }
  };

  return (
    <div className='RetryWrapper'>
      <div className='Retry show'>
        <h1 className='Retry__header'>Initial Ability</h1>
        <div className='Retry__log'>{message}</div>
        <form>
          <div className='Retry__statBox'>
            <label className='Retry__label'>str 공격력</label>
            <div className='Retry__valuebox'>{ability.str}</div>
          </div>
          <div className='Retry__statBox'>
            <label className='Retry__label'>def 방어력</label>
            <div className='Retry__valuebox'>{ability.def}</div>
          </div>
          <div className='Retry__btnBox'>
            <button className='Retry__btn' type='button' onClick={startGame}>
              시작하기
            </button>
            <button className='Retry__btn' type='button' onClick={retrySetting}>
              재시도 (잔여 : {6 - trial}번)
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Retry;
