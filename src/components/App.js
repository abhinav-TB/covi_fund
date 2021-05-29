import React, { Component } from 'react';
import './App.css';
import Portis from '@portis/web3';
import Web3 from 'web3';
import Covifund from '../abis/Covifund.json'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './Components/Home/homePage';
import Addpost from './Components/Addpost';
import Forum from './Components/Forum';
import Profile from './Components/Profile';
import Register from './Components/Register';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const portis = new Portis('ad8c37c0-13cf-4d29-939e-221cf2ca9ead', 'maticMumbai');
const web3 = new Web3(portis.provider);
window.web3 = web3;
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
  initializeUser() {
    this.setState({ loading: true })
    this.state.dvf.methods.initializeUser().send({ from: this.state.account })
    .once('confirmation', (n, receipt) => {
      this.setState({ loading: false })
      window.location.href = "/forum";
    })
  }

  initializeOrg(title, category, description) {
    this.setState({ loading: true })
    this.state.dvf.methods.initializeOrg(title, category, description).send({ from: this.state.account })
    .once('confirmation', (n, receipt) => {
      this.setState({ loading: false })
      window.location.href = "/forum";
    })
  }

  fundOrg(id, fundrec) {
    this.setState({ loading: true })
    this.state.dvf.methods.fundOrg(id).send({ from: this.state.account, value: fundrec })
    .once('confirmation', (n, receipt) => {
      this.setState({ loading: false })
      window.location.reload()
    })
  }
  constructor(props) {
    super(props)
    this.state = {
      account: '',
      dvf: null,
      uCount: 0,
      oCount: 0,
      users: [],
      orgs: [],
      loading: true
    }
    this.initializeUser = this.initializeUser.bind(this)
    this.initializeOrg = this.initializeOrg.bind(this)
    this.fundOrg = this.fundOrg.bind(this)
  }
  render() {
    return (
      <div>
        <Router>
            <Route path="/" exact component = {HomePage}/>
            <Route exact path="/register" render={props => (
              <React.Fragment>
                { this.state.loading
                ? <center><br/><br/><br/><br/><br/><br/><div class="loader"></div></center>
                : <Register
                    initializeUser={this.initializeUser}
                />
                }
              </React.Fragment>
            )} />
            <Route exact path="/add" render={props => (
              <React.Fragment>
                { this.state.loading
                ? <center><br/><br/><br/><br/><br/><br/><div class="loader"></div></center>
                : <Addpost
                    initializeOrg={this.initializeOrg}
                />
                }
              </React.Fragment>
            )} />
            <Route exact path="/forum" render={props => (
              <React.Fragment>
                { this.state.loading
                ? <center><br/><br/><br/><br/><br/><br/><div class="loader"></div></center>
                : <Forum
                    orgs={this.state.orgs}
                    fundOrg={this.fundOrg}
                />
                }
              </React.Fragment>
            )} />
            <Route exact path="/profile" render={props => (
              <React.Fragment>
                { this.state.loading
                ? <center><br/><br/><br/><br/><br/><br/><div class="loader"></div></center>
                : <Profile
                    account={this.state.account}
                    users={this.state.users}
                />
                }
              </React.Fragment>
            )} />
          </Router>
      </div>
    );
  }
}

export default App;
