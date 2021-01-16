import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";

import "./App.css";
import Sidebar from "./components/Sidebar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Brutes, BruteFactory, BruteMall, BruteHotel} from './pages/Brutes';
import {Account, Dashboard, Inventary, Succes, History, Parameters} from './pages/Account';
import {Gears, EquipmentShop, Forge, Junkyard} from './pages/Gears';
import {Marketplace, GearsMarket, BrutesMarket} from './pages/Markeplace';



class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  // runExample = async () => {
  //   const { accounts, contract } = this.state;

  //   // Stores a given value, 5 by default.
  //   await contract.methods.set(5).send({ from: accounts[0] });

  //   // Get the value from the contract to prove it worked.
  //   const response = await contract.methods.get().call();

  //   // Update state with the result.
  //   this.setState({ storageValue: response });
  // };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }

    return (
      <>
        <Router>
          <Sidebar/>
          <Switch>
            <Route path='./brutes' exact component={Brutes}/>
            <Route path='./brutes/brutefactory' exact component={BruteFactory}/>
            <Route path='./brutes/brutemall' exact component={BruteMall}/>
            <Route path='./brutes/brutehotel' exact component={BruteHotel}/>
            <Route path='./gears' exact component={Gears}/>
            <Route path='./gears/equipmentshot' exact component={EquipmentShop}/>
            <Route path='./gears/forge' exact component={Forge}/>
            <Route path='./gears/junkyard' exact component={Junkyard}/>
            <Route path='./marketplace' exact component={Marketplace}/>
            <Route path='./marketplace/gearsmarket' exact component={GearsMarket}/>
            <Route path='./marketplace/brutesmarket' exact component={BrutesMarket}/>
            <Route path='./account' exact component={Account}/>
            <Route path='./account/dashboard' exact component={Dashboard}/>
            <Route path='./account/inventary' exact component={Inventary}/>
            <Route path='./account/success' exact component={Succes}/>
            <Route path='./account/history' exact component={History}/>
            <Route path='./account/parameters' exact component={Parameters}/>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;
