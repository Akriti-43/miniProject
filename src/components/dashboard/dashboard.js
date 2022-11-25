import { AppBar, Container, Button } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import useStyles from './Styles';
import logo from '../home/images/logo.png';



export const Dashboard = () => {

    const accountButton = () => {
        
    }

    const classes = useStyles();

    return(
        <>
        <AppBar className={classes.navAppBar}>
        <div className={classes.navAppBarDiv1}>
          <div className={classes.navAppBarDiv11}><img src={logo} style={{maxWidth: '13%'}}/></div>

          <div className={classes.navAppBarDiv12} onClick={accountButton}>
            <AccountCircle style={{ color: "#02A4D3" }} />
            <div className={classes.navAppBarDiv13}>Logout</div>
          </div>
        </div>
      </AppBar>

        <Container style={{maxWidth: '80%', marginTop: '7%', marginLeft: '3%'}}>
            <div style={{fontSize: '150%'}}>Incoming Orders</div>


            <hr />
            <div style={{display: 'flex'}}>
            <div style={{marginLeft: '1.5%'}}>
                <div>Margerita Pizza</div>
                <div>Satyansh Prakash</div>
                <div>S-17B Ganpati Infinity Vrindavan</div>
            </div>
            <Button style={{marginLeft: 'auto', order: '2', backgroundColor: '#F2BA49', height: '1%', marginTop: '1.2%', color: 'white'}}>Accept Order</Button>
            </div>
            <hr />


            <div style={{display: 'flex'}}>
            <div style={{marginLeft: '1.5%'}}>
                <div>Margerita Pizza</div>
                <div>Satyansh Prakash</div>
                <div>S-17B Ganpati Infinity Vrindavan</div>
            </div>
            <Button style={{marginLeft: 'auto', order: '2', backgroundColor: '#F2BA49', height: '1%', marginTop: '1.2%', color: 'white'}}>Accept Order</Button>
            </div>
            <hr />


            <div style={{display: 'flex'}}>
            <div style={{marginLeft: '1.5%'}}>
                <div>Margerita Pizza</div>
                <div>Satyansh Prakash</div>
                <div>S-17B Ganpati Infinity Vrindavan</div>
            </div>
            <Button style={{marginLeft: 'auto', order: '2', backgroundColor: '#F2BA49', height: '1%', marginTop: '1.2%', color: 'white'}}>Accept Order</Button>
            </div>
            <hr />
        </Container>






        <Container style={{maxWidth: '80%', marginTop: '7%', marginLeft: '3%'}}>
            <div style={{fontSize: '150%'}}>Orders in Process</div>
            <hr />


            <div style={{display: 'flex'}}>
            <div style={{marginLeft: '1.5%'}}>
                <div>Margerita Pizza</div>
                <div>Satyansh Prakash</div>
                <div>S-17B Ganpati Infinity Vrindavan</div>
            </div>
            <Button style={{marginLeft: 'auto', order: '2', backgroundColor: '#63B76C', height: '1%', marginTop: '1.2%', color: 'white'}}>Dispatch Order</Button>
            </div>
            <hr />



            <div style={{display: 'flex'}}>
            <div style={{marginLeft: '1.5%'}}>
                <div>Margerita Pizza</div>
                <div>Satyansh Prakash</div>
                <div>S-17B Ganpati Infinity Vrindavan</div>
            </div>
            <Button style={{marginLeft: 'auto', order: '2', backgroundColor: '#63B76C', height: '1%', marginTop: '1.2%', color: 'white'}}>Dispatch Order</Button>
            </div>
            <hr />




            <div style={{display: 'flex'}}>
            <div style={{marginLeft: '1.5%'}}>
                <div>Margerita Pizza</div>
                <div>Satyansh Prakash</div>
                <div>S-17B Ganpati Infinity Vrindavan</div>
            </div>
            <Button style={{marginLeft: 'auto', order: '2', backgroundColor: '#63B76C', height: '1%', marginTop: '1.2%', color: 'white'}}>Dispatch Order</Button>
            </div>
            <hr />

        </Container>



        <Container style={{maxWidth: '80%', marginTop: '7%', marginLeft: '3%'}}>
            <div style={{fontSize: '150%'}}>Completed Orders</div>
            <hr />


            <div style={{display: 'flex'}}>
            <div style={{marginLeft: '1.5%'}}>
                <div>Margerita Pizza</div>
                <div>Satyansh Prakash</div>
                <div>S-17B Ganpati Infinity Vrindavan</div>
                <div>21-11-2022 18:24</div>
            </div>
            <Button style={{marginLeft: 'auto', order: '2', backgroundColor: 'grey', height: '1%', marginTop: '2.4%', color: 'white'}}>View Details</Button>
            </div>
            <hr />



            <div style={{display: 'flex'}}>
            <div style={{marginLeft: '1.5%'}}>
                <div>Margerita Pizza</div>
                <div>Satyansh Prakash</div>
                <div>S-17B Ganpati Infinity Vrindavan</div>
                <div>21-11-2022 18:24</div>
            </div>
            <Button style={{marginLeft: 'auto', order: '2', backgroundColor: 'grey', height: '1%', marginTop: '2.4%', color: 'white'}}>View Details</Button>
            </div>
            <hr />



            <div style={{display: 'flex'}}>
            <div style={{marginLeft: '1.5%'}}>
                <div>Margerita Pizza</div>
                <div>Satyansh Prakash</div>
                <div>S-17B Ganpati Infinity Vrindavan</div>
                <div>21-11-2022 18:24</div>
            </div>
            <Button style={{marginLeft: 'auto', order: '2', backgroundColor: 'grey', height: '1%', marginTop: '2.4%', color: 'white'}}>View Details</Button>
            </div>
            <hr />
        </Container>








        <Container>

        </Container>
        </>
    )
}