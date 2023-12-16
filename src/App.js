import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Buy from './pages/Buy/index';
import BuyAssets from './pages/BuyAssets/index';
import Deposit from './pages/Deposit/index';
import Dollars from './pages/Dollars/index';
import Menu from './pages/Menu/index';
import Receive from './pages/Receive/index';
import ReceiveAssets from './pages/ReceiveAssets/index';
import Send from './pages/Send/index';
import SendAssets from './pages/SendAssets/index';
import Swap from './pages/Swap/index';
import Toncoin from './pages/Toncoin/index';
import ReceiverSearch from './pages/ReceiverSearch';

export default function App () {
  return (
  <Routes>
    <Route path="/main" exact Component={Menu}/>
    <Route path="/send-options" exact Component={Send}/>
    <Route path="/choose_asset/send" exact Component={SendAssets}/>
    <Route path="/assets/TON/receiver-search" exact Component={ReceiverSearch}/>
    <Route path="/assets/USDT/receiver-search" exact Component={ReceiverSearch}/>
    <Route path="/swap" exact Component={Swap}/>
    <Route path="/purchase-options" exact Component={Deposit}/>
    <Route path="/choose_asset/receive" exact Component={ReceiveAssets}/>
    <Route path="/receive" exact Component={Receive}/>
    <Route path="/receive?assetCurrency=USDT" exact Component={Receive}/>
    <Route path="/assets/TON" exact Component={Toncoin}/>
    <Route path="/assets/USDT" exact Component={Dollars}/>
    <Route path="/choose_asset/buy" exact Component={BuyAssets}/>
    <Route path='/buy' exact Component={Buy}/>
  </Routes>
  );
}

