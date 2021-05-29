import React, { Component } from 'react';
import Navbar from './Home/navbar';
import Footer from './Home/footer';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import RangeSlider from 'react-bootstrap-range-slider';
import './Forum.css'
import '../App.css';


class Forum extends Component {
    constructor() {
      super();
      this.state = {
        search: '',
        amount: 10
      };
    }
  
    updateSearch(event) {
      this.setState({search: event.target.value.substr(0,20)});
    }
  
    render() {
      let filteredOrgs = this.props.orgs.filter(
        (org) => {
          return org.title.indexOf(this.state.search) !== -1;
        }
      );

    return (
      <div className="wrapper">
       <Navbar/>
        <div className="container-fluid mt-5 " >
        
        <div className="row">
            <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '500px' }}>
              <div className="content mr-auto ml-auto">
                <p>&nbsp;</p>
                <h1>Search <br/><br/>NGO <br/><br/>Individual Posts </h1>
                <br></br>
                <input type="text" class="form-control" value={this.state.search} onChange={this.updateSearch.bind(this)} />
                <p>&nbsp;</p>
                { filteredOrgs.map((org, key) => {
                  return(
                    <div key={key} >
                      <div className="card-header">
                      <p class="badge badge-primary">{org.category}</p>
                      <br/>
                      <h2>{org.title}</h2>
                      <small>Address: {org.org_address}</small>
                      </div>
                      <p>Funds Received: ${window.web3.utils.fromWei((org.funds*430).toString(), 'Ether')} </p>
                      <ul id="postList" className="list-group list-group-flush">
                        <li className="list-group-item">
                          <p>{org.description}</p>
                          <br/>
                        </li>
                        <Grid item xs={12}>
                        <form  style={{width: "100%", marginTop: 30}} 
                        onSubmit={(event) => {
                            event.preventDefault()
                            let fundrec = window.web3.utils.toWei((this.state.amount/430).toString(), 'Ether')
                            console.log(org.id.toString())
                            this.props.fundOrg(org.id.toString(), fundrec)
                        }}>
                        <FormGroup>
                            <FormLabel>How much would you like to contribute?</FormLabel>
                            <FormLabel style={{marginTop: 30, display: 'flex', flexDirection: 'column', alignItems: 'center', fontWeight: '500', fontSize: '20px'}}>${this.state.amount}</FormLabel>
                            <RangeSlider
                                value={this.state.amount}
                                onChange={e => this.setState({amount: e.target.value})}
                                min={10}
                                max={100}
                                />
                        </FormGroup>
                        <br/>
                        <button type="submit" className="btn btn-outline-info">Yes
                        </button>
                        </form>
                        </Grid>
                        </ul>
                      <br/><br/>
                    </div>
                  )
                })}
              </div>
            </main>
          </div>
          <Footer/>
        </div>
        </div>
      );
    }
  }
  
  export default Forum;