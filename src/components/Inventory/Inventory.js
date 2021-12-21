import React from 'react';

const Inventory = ({ inventory }) => {
  const itemList = inventory.map((item) => {
    const { id: itemId, name: itemName, quantity } = item;
    return (
      <div key={itemId} className='Inventory__box'>
        <div className='Inventory__item'>{itemName}</div>
        <div className='Inventory__value'>{quantity}</div>
      </div>
    );
  });

  return (
    <div className='Inventory'>
      <h1 className='Inventory__title'>Inventory</h1>
      <div className='Inventory__container'>{itemList}</div>
    </div>
  );
};

export default Inventory;
