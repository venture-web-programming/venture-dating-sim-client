import React from 'react';

const Inventory = () => {
  const renderWrapper = () => {
    return (
      <div className='Inventory__wrapper'>
        <div className='Inventory__box'>
          <div className='Inventory__item'>item 1 :</div>
          <div className='Inventory__value'>0</div>
        </div>
        <div className='Inventory__box'>
          <div className='Inventory__item'>item 2 :</div>
          <div className='Inventory__value'>0</div>
        </div>
        <div className='Inventory__box'>
          <div className='Inventory__item'>item 3 :</div>
          <div className='Inventory__value'>0</div>
        </div>
        <div className='Inventory__box'>
          <div className='Inventory__item'>item 4 :</div>
          <div className='Inventory__value'>0</div>
        </div>
      </div>
    );
  };
  return (
    <div className='Inventory'>
      <h1 className='Inventory__title'>Inventory</h1>
      <div className='Inventory__container'>
        {renderWrapper()}
        {renderWrapper()}
        {renderWrapper()}
      </div>
    </div>
  );
};

export default Inventory;
