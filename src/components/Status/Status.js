import React from 'react';

const Status = ({ status }) => {
  return (
    <div className='Status'>
      <h1 className='Status__title'>User's Status</h1>
      <div className='Status__container'>
        <div className='Status__wrapper'>
          <div className='Status__category'>현재 우리 사이 :</div>
          <div className='Status__level'>{status.level}</div>
        </div>
        <div className='Status__wrapper'>
          <div className='Status__box'>
            <div className='Status__detail'>
              <div className='Status__category'>전투력</div>
              <div className='Status__value'>{status.str}</div>
            </div>
            <div className='Status__detail'>
              <div className='Status__category'>체력</div>
              <div className='Status__value'>{status.hp}</div>
            </div>
          </div>
          <div className='Status__box'>
            <div className='Status__detail'>
              <div className='Status__category'>방어력</div>
              <div className='Status__value'>{status.def}</div>
            </div>
            <div className='Status__detail'>
              <div className='Status__category'>경험치</div>
              <div className='Status__value'>{status.exp}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
