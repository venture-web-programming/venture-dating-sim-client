import React from 'react';

const Movement = ({ coordinate, moveCoordinate }) => {
  const { x, y } = coordinate;

  return (
    <div className='Movement'>
      <div className='Movement__container Movement__container--1'>
        ({x}, {y})
      </div>
      <div className='Movement__container Movement__container--2'>
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
            <div className='Movement__user'>
              <img className='Movement__img' src='#' />
            </div>
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
    </div>
  );
};

export default Movement;
