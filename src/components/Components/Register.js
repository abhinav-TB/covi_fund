import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './Home/navbar';
import Footer from './Home/footer';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Register extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="back" >
                <Navbar/>
                <div className="center">
                <center>
                    <h1 style={{color: 'white'}}><strong>Covifund</strong></h1>
                    </center>
                
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <div style={{marginTop: 80, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Avatar style={{margin:10}}>
                            <img style={{height: 40, width: 40}} src="https://thumbs.dreamstime.com/z/diverse-hands-holding-word-diversity-40595458.jpg"/>
                            </Avatar>
                            
                            <Typography component="h1" variant="h5">
                                <h1 style={{color: 'white'}}> Welcome New User</h1>
                           
                            </Typography>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                style = {{marginTop: 30, marginBottom: 20}}
                                onClick = {this.props.initializeUser}
                            >
                                Add me as New User
                            </Button>
                        </div>

                    </Container>
                    </div>   
                <Footer/>
                </div>
            </React.Fragment>
        );
    }
}

export default Register;