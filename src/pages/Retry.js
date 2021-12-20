import React from 'react';
// import { retry } from '../api/retry';

const Retry = () => {
  return (
    <div className='RetryWrapper'>
      <div className='Retry show'>
        <h1 className='Retry__header'>Initial Ability</h1>
        <div className='Retry__log'>능력치가 새롭게 설정 되었습니다.</div>
        <form>
          <div className='Retry__statBox'>
            <label className='Retry__label'>str 공격력</label>
            <div className='Retry__valuebox'>10</div>
          </div>
          <div className='Retry__statBox'>
            <label className='Retry__label'>def 방어력</label>
            <div className='Retry__valuebox'>5</div>
          </div>
          <div className='Retry__btnBox'>
            <button className='Retry__btn' type='submit'>
              시작하기
            </button>
            <button className='Retry__btn' type='submit'>
              재시도 (잔여 : 3번)
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Retry;
