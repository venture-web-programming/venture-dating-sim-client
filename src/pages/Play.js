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
import { move } from '../api/move';

const Play = () => {
  const [status, setStatus] = useState(INITIAL_STATUS);
  const [coordinate, setCoordinate] = useState(INITIAL_COORDINATE);
  const [inventory, setInventory] = useState(INITIAL_INVENTORY);
  const [mapInfo, setMapInfo] = useState({ event: 'rest', id: 0, message: '좋은 아침이다.' });
  const [onBattle, setOnBattle] = useState(false);

  useEffect(() => {
    console.log(coordinate);
  }, [coordinate]);

  const moveCoordinate = async (nextCoordinate = {}) => {
    try {
      console.log('123');
      if (!onBattle) {
        const mapInfo = await move(nextCoordinate);
        setCoordinate(nextCoordinate);
        setMapInfo(mapInfo);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className='Play'>
      <div className='Play__container'>
        <Status status={status} />
        <Inventory inventory={inventory} />
      </div>
      <div className='Play__container'>
        <Script mapInfo={mapInfo} setOnBattle={setOnBattle} />
        <Movement coordinate={coordinate} moveCoordinate={moveCoordinate} />
      </div>
    </div>
  );
};

export default Play;
