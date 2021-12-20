import React from 'react';

const Script = () => {
  return (
    <div className='Script'>
      <h1 className='Script__title'>Event</h1>
      <div className='Script__desc'>
        <div className='Script__map'>[battle]</div>
        <div className='Script__text'>
          그녀의 남사친을 직접 만났다!
          <br />
          상대는 체력: 10, 공격력: 10, 방어력: 10 이다.
        </div>
      </div>
      <div className='Script__btnContainer'>
        <button className='Script__btn Script__btn--1' type='button'>
          공격하기
        </button>
        <button className='Script__btn Script__btn--2' type='button'>
          도망가기
        </button>
      </div>
    </div>
  );
};

export default Script;
