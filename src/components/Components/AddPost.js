import React, { Component } from 'react';
import Navbar from './Home/navbar';
import Footer from './Home/footer';
import { Form } from 'react-bootstrap';


class Addpost extends Component {  
    render() {
    return (
        <React.Fragment>
        <Navbar/>
        <div className="container-fluid mt-5">
        <div className="row">
            <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '500px' }}>
              <div className="content mr-auto ml-auto">
                <p>&nbsp;</p>
                  <Form onSubmit={(event) => {
                    event.preventDefault()
                    const title = this.rtitle.value
                    const category = this.rcategory.value
                    const description = this.rdesc.value
                    this.props.initializeOrg(title, category, description)
                  }}>
                  <center>
                  <h1>Add your </h1>
                  <br></br><br></br>
                  <h1>Post</h1>
                  <br></br>
                  <div class="form-container">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                        id="rtitle"
                        type="text"
                        ref={(input) => { this.rtitle = input }}
                        className="form-control"
                        placeholder="Enter a Title"
                        required />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Choose Category</Form.Label>
                        <Form.Control as="select" id="rcategory" 
                        ref={(input) => { this.rcategory = input }} required>
                            <option value="Medical funds">Medical funds</option>
                            <option value="Economic support">Economic support</option>
                            <option value="Post covid relief">Post covid relief</option>
                        </Form.Control>
                    </Form.Group>
                    <br/>   
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <h4>Provide a description here</h4>
                        <Form.Control 
                        as="textarea" 
                        rows={5}
                        id="rdesc"
                        ref={(input) => { this.rdesc = input }}
                        required />
                    </Form.Group>   
                    <br/>              
                  </div>
                  <br/>
                  <button type="submit" className="btn btn-outline-info">Submit your Post</button>
                  </center>
                </Form>
                <br/><br/><br/><br/>
              </div>
            </main>
          </div>
        </div>
        <Footer/>
        </React.Fragment>
      );
    }
  }
  
  export default Addpost;