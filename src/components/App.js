import React, { Component } from 'react';
import './App.css';
import Portis from '@portis/web3';
import Web3 from 'web3';
import Covifund from '../abis/Covifund.json'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './Components/Home/homePage';


const portis = new Portis('ad8c37c0-13cf-4d29-939e-221cf2ca9ead', 'maticMumbai');
const web3 = new Web3(portis.provider);

class App extends Component {
  async componentWillMount() {
    await this.loadBlockchainData()
  }
  async loadBlockchainData() {
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const networkId = await web3.eth.net.getId()
    const networkData = Covifund.networks[networkId]
    if(networkData) {
      const dvf = web3.eth.Contract(Covifund.abi, networkData.address)
      this.setState({ dvf })
      const uCount = await dvf.methods.uCount().call()
      const oCount = await dvf.methods.oCount().call()
      this.setState({ dvf })
      for (var i = 1; i <= uCount; i++) {
        const user = await dvf.methods.users(i).call()
        console.log(user);
        this.setState({
          users: [...this.state.users, user]
        })
      }
      for (var ib = 1; ib <= oCount; ib++) {
        const org = await dvf.methods.orgs(ib).call()
        this.setState({
          orgs: [...this.state.orgs, org]
        })
      }
      this.setState({ loading: false})
    } else {
      window.alert('The forum contract could not be deployed to network')
    }
  }
  render() {
    return (
      <div>
        <Router>
            <Route path="/" exact component = {HomePage}/>
        </Router>
      </div>
    );
  }
}

export default App;
