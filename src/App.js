import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Asset from './pages/Asset';
import Purchase from './pages/Purchase';
import Exchange from './pages/Exchange';
import Main from './pages/Main';
import Receive from './pages/Receive';
import ReceiverSearch from './pages/ReceiverSearch';
import Scw from './pages/Scw';
import ScwAsset from './pages/ScwAsset';
import SendOptions from './pages/SendOptions';
import ChooseAsset from './pages/ChooseAsset';
import ScwChooseAsset from './pages/ScwChooseAsset';

export default function App () {
  return (
  <Routes>
    <Route path="/main" Component={Main}/>
    <Route path="/send-options" Component={SendOptions}/>
    <Route path="/choose_asset/send" Component={ChooseAsset}/>
    <Route path="/assets/TON/receiver-search" Component={ReceiverSearch}/>
    <Route path="/assets/USDT/receiver-search" Component={ReceiverSearch}/>
    <Route path="/assets/BTC/receiver-search" Component={ReceiverSearch}/>
    <Route path="/exchange" Component={Exchange}/>
    <Route path="/choose_asset/receive" Component={ChooseAsset}/>
    <Route path="/receive" Component={Receive}/>
    <Route path="/scw" Component={Scw}/>
    <Route path="/scw/assets/TON" Component={ScwAsset}/>
    <Route path="/scw/assets/PX" Component={ScwAsset}/>
    <Route path="/assets/TON" Component={Asset}/>
    <Route path="/assets/USDT" Component={Asset}/>
    <Route path="/assets/BTC" Component={Asset}/>
    <Route path="/choose_asset/purchase" Component={ChooseAsset}/>
    <Route path='/assets/TON/purchase' Component={Purchase}/>
    <Route path='/assets/USDT/purchase' Component={Purchase}/>
    <Route path='/assets/BTC/purchase' Component={Purchase}/>
  </Routes>
  );
}

