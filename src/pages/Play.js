import React, { useState, useEffect } from 'react';
import Status from '../components/Status';
import Inventory from '../components/Inventory';
import Script from '../components/Script';
import Movement from '../components/Movement';
import {
  INITIAL_STATUS,
  INITIAL_INVENTORY,
  INITIAL_SCRIPT,
  INITIAL_COORDINATE,
} from '../constants/initial-state';

const Play = () => {
  const [status, setStatus] = useState(INITIAL_STATUS);
  const [coordinate, setCoordinate] = useState(INITIAL_COORDINATE);
  const [inventory, setInventory] = useState(INITIAL_INVENTORY);
  const [script, setScript] = useState(INITIAL_SCRIPT);

  useEffect(() => {
    console.log(coordinate);
    return () => {};
  }, [coordinate]);

  const moveCoordinate = async (nextCoordinate = {}) => {
    // 서버 로직
    setCoordinate(nextCoordinate);
  };

  return (
    <div className='Play'>
      <div className='Play__container'>
        <Status status={status} />
        <Inventory inventory={inventory} />
      </div>
      <div className='Play__container'>
        <Script script={script} />
        <Movement coordinate={coordinate} moveCoordinate={moveCoordinate} />
      </div>
    </div>
  );
};

export default Play;
