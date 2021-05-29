import React, {Component} from 'react';
import Navbar from './Home/navbar';
import Footer from './Home/footer';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import {colors} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './profile.css'
import { Doughnut } from "react-chartjs-2";
const ringData = {
    datasets: [
      {
        data: [50, 20, 30, 0, 0],
        backgroundColor: [
          colors.indigo[500],
          colors.red[600],
          colors.orange[600],
          colors.green[600],
          colors.yellow[600],
        ],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white,
      },
    ],
    labels: ["Give India","Concern India","KVN Foundation","Milaap","Pint Network"],
  };
class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            isuser: false
        };
    }

    

    render() {
            return(
                <>
                <Navbar/>
                <div className="container-fluid mt-5">
                
                <CssBaseline />
              
                <main>
                    <div style={{paddingTop: 80, paddingBottom: 60}}>
                    <Container maxWidth="sm">
                        <Typography component="h3" variant="h4" align="center" color="textPrimary" gutterBottom>
                        Hi, 
                        <center>
                        {this.props.account}
                            </center>
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Welcome to your Profile! 
                        <br></br>Here, you can view and manage your current donation records.
                        </Typography>
                    </Container>
                     <center>
                    <div container spacing={4} className="org-card">
                        <Grid xs={12} sm={6} md={4}>
                            <Card style={{height: '100%', display: 'flex' , }}>
                            <CardContent style={{flexGrow: 1}} >
                                <Typography gutterBottom variant="h5" component="h2" align='center'>3
                                </Typography>
                                
                                <Typography>
                                Organizations/Individuals Supported
                                </Typography>
                               
                            </CardContent>
                            </Card>
                        </Grid>
                        
                    </div>
                    </center>
                    </div>
                </main>
                <Box height={300} position="relative">
                        <Doughnut data={ringData}  />
                    </Box>
                <Footer/>
                </div>
                </> 
            );
        }
       
    
}

export default Profile;