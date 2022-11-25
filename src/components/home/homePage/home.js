import { Container, Button } from "@material-ui/core";
import firstBackgroundImage  from '../images/firstBackgroundImage.jpg';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import useStyles from './styles';
import { useState } from "react";
import icon1 from '../images/Icon1.png';
import icon2 from '../images/icon2.jpg';
import icon3 from '../images/icon3.jpg';
import { useNavigate } from "react-router-dom";


export const Home = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const loginFunction = () => {
       navigate('/auth');
    }

    return(
        <>
        {/* {login? ( <Container> <Login /></Container>) : (console.log("hello"))} */}
       
        <Container className={classes.firstContainer}>
            <div className={classes.divContainer}>
                <div className={classes.div1}>Door Drop</div>
                <Button className={classes.loginButton} onClick={loginFunction}>Login</Button>
                <Button onClick={loginFunction} className={classes.signUpButton}>Create Account</Button>
            </div>
            <div className={classes.div2}>
                <div className={classes.div21}>Register your restaurant on Foodie Foods</div> 
                <div className={classes.div22}>and get more customers!</div>
                <div className={classes.div23}>
                    <div className={classes.button1}>
                    <Button className={classes.div23Button}>Register your Restaurant</Button>
                    <Button onClick={loginFunction} className={classes.div23Button}>Restuarant already listed? login now</Button>
                    </div>
                </div>
            </div>
        </Container>
        <Container className={classes.secondContainer}>
            <div className={classes.secondContainerDiv1}>
                <div className={classes.secondContainerDiv11}>Get started with online ordering</div>
                <div className={classes.secondContainerDiv12}>Please keep the documents ready for a smooth signup</div>
            </div>
            <div className={classes.secondContainerDiv2}>
                <div className={classes.secondContainerDiv21}>
                    <div className={classes.secondContainerDiv211}>
                        <CheckCircleIcon className={classes.CheckCircleIcon}/>
                        <div className={classes.secondContainerDiv2111}>Your restaurant Menu</div>
                    </div>
                    <div className={classes.secondContainerDiv211} style={{marginLeft: '13vw'}}>
                        <CheckCircleIcon className={classes.CheckCircleIcon2}/>
                        <div className={classes.secondContainerDiv2111}>Your restaurant Menu</div>
                    </div>
                </div>
            </div>

            <div className={classes.secondContainerDiv2} style={{marginTop: '12%'}}>
                <div className={classes.secondContainerDiv21}>
                    <div className={classes.secondContainerDiv211}>
                        <CheckCircleIcon className={classes.CheckCircleIcon}/>
                        <div className={classes.secondContainerDiv2111}>Your restaurant Menu</div>
                    </div>
                    <div className={classes.secondContainerDiv211} style={{marginLeft: '13vw'}}>
                        <CheckCircleIcon className={classes.CheckCircleIcon2}/>
                        <div className={classes.secondContainerDiv2111}>Your restaurant Menu</div>
                    </div>
                </div>
            </div>

            <div className={classes.secondContainerDiv2} style={{marginTop: '20%'}}>
                <div className={classes.secondContainerDiv21}>
                    <div className={classes.secondContainerDiv211}>
                        <CheckCircleIcon className={classes.CheckCircleIcon}/>
                        <div className={classes.secondContainerDiv2111}>Your restaurant Menu</div>
                    </div>
                    <div className={classes.secondContainerDiv211} style={{marginLeft: '12vw'}}>
                        <CheckCircleIcon className={classes.CheckCircleIcon2}/>
                        <div className={classes.secondContainerDiv2111}>Your restaurant Menu</div>
                    </div>
                </div>
            </div>

        </Container>


        <Container className={classes.secondContainer}>
            <div className={classes.secondContainerDiv1}>
                <div className={classes.secondContainerDiv11}>Get started with online ordering</div>
                <div className={classes.secondContainerDiv12}>Please keep the documents ready for a smooth signup</div>
            </div>
            <div className={classes.secondContainerDiv2}>
                <div className={classes.secondContainerDiv21}>
                    <div className={classes.secondContainerDiv211}>
                        <CheckCircleIcon className={classes.CheckCircleIcon}/>
                        <div className={classes.secondContainerDiv2111}>Your restaurant Menu</div>
                    </div>
                    <div className={classes.secondContainerDiv211} style={{marginLeft: '13vw'}}>
                        <CheckCircleIcon className={classes.CheckCircleIcon2}/>
                        <div className={classes.secondContainerDiv2111}>Your restaurant Menu</div>
                    </div>
                </div>
            </div>

            <div className={classes.secondContainerDiv2} style={{marginTop: '12%'}}>
                <div className={classes.secondContainerDiv21}>
                    <div className={classes.secondContainerDiv211}>
                        <CheckCircleIcon className={classes.CheckCircleIcon}/>
                        <div className={classes.secondContainerDiv2111}>Your restaurant Menu</div>
                    </div>
                    <div className={classes.secondContainerDiv211} style={{marginLeft: '13vw'}}>
                        <CheckCircleIcon className={classes.CheckCircleIcon2}/>
                        <div className={classes.secondContainerDiv2111}>Your restaurant Menu</div>
                    </div>
                </div>
            </div>

            <div className={classes.secondContainerDiv2} style={{marginTop: '20%'}}>
                <div className={classes.secondContainerDiv21}>
                    <div className={classes.secondContainerDiv211}>
                        <CheckCircleIcon className={classes.CheckCircleIcon}/>
                        <div className={classes.secondContainerDiv2111}>Your restaurant Menu</div>
                    </div>
                    <div className={classes.secondContainerDiv211} style={{marginLeft: '13vw'}}>
                        <CheckCircleIcon className={classes.CheckCircleIcon2}/>
                        <div className={classes.secondContainerDiv2111}>Your restaurant Menu</div>
                    </div>
                </div>
            </div>
        </Container>


        <Container className={classes.thirdContainer}>
            <div>
                <Container className={classes.thirdContainerContainer}>
                    <img className={classes.icons} src={icon1}/>
                    <div className={classes.thirdContainerContainerdiv1}>Step 1</div>
                    <div className={classes.thirdContainerContainerdiv2}>Create your account on Foodie Foods</div>
                    <div  className={classes.thirdContainerContainerdiv3}>Help users discover your place by creating a listing on Foodie Foods</div>
                </Container>


                <Container className={classes.thirdContainerContainer} style={{marginLeft: '35%'}}>
                    <img className={classes.icons} src={icon2}/>
                    <div className={classes.thirdContainerContainerdiv1}>Step 2</div>
                    <div className={classes.thirdContainerContainerdiv2}>Register for online ordering</div>
                    <div className={classes.thirdContainerContainerdiv3}>And deliver orders to millions of customers with ease</div>
                </Container>

                <Container className={classes.thirdContainerContainer} style={{marginLeft: '65%'}}>
                    <img className={classes.icons} src={icon3}/>
                    <div className={classes.thirdContainerContainerdiv1}>Step 3</div>
                    <div className={classes.thirdContainerContainerdiv2}>Start receiving orders online</div>
                    <div className={classes.thirdContainerContainerdiv3}>Manage orders on our partner app, web dashboard or API partners</div>
                </Container>
            </div>
        </Container>
        </>
    )
}