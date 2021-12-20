import React from 'react';

const Movement = ({ coordinate, moveCoordinate }) => {
  return (
    <div className='Movement'>
      <div className='Movement__wrapper Movement__wrapper--1'>
        <button
          className='Movement__arrow Movement__arrow--left'
          type='button'
          onClick={() => moveCoordinate({ ...coordinate, x: coordinate.x - 1 })}
        >
          Left
        </button>
      </div>
      <div className='Movement__wrapper Movement__wrapper--2'>
        <div className='Movement__box Movement__box--1'>
          <button
            className='Movement__arrow Movement__arrow--up'
            type='button'
            onClick={() => moveCoordinate({ ...coordinate, y: coordinate.y + 1 })}
          >
            Up
          </button>
        </div>
        <div className='Movement__box Movement__box--2'>
          <div className='Movement__user'>Image</div>
        </div>
        <div className='Movement__box Movement__box--3'>
          <button
            className='Movement__arrow Movement__arrow--down'
            type='button'
            onClick={() => moveCoordinate({ ...coordinate, y: coordinate.y - 1 })}
          >
            Down
          </button>
        </div>
      </div>
      <div className='Movement__wrapper Movement__wrapper--3'>
        <button
          className='Movement__arrow Movement__arrow--right'
          type='button'
          onClick={() => moveCoordinate({ ...coordinate, x: coordinate.x + 1 })}
        >
          Right
        </button>
      </div>
    </div>
  );
};

export default Movement;
