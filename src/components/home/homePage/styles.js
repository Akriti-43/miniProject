import { makeStyles } from "@material-ui/core/styles";
import firstBackgroundImage  from '../images/firstBackgroundImage.jpg';
import thirdContainerImage from '../images/thirdContainerImage.jpg';

export default makeStyles({
    firstContainer: {
        maxWidth: '100%',
        height: '80vh',
        backgroundImage: `url(${firstBackgroundImage})`,
        backgroundSize: 'cover',
        padding: 0,
    },
    divContainer: {
        position: 'absolute',
        paddingTop: '1%',
        paddingLeft: '15%',
        display: 'flex'
    },

    div1: {
        color: 'white',
        fontSize: '200%'
    },

    loginButton: {
        color: 'white',
        fontSize: '70%',
        border: '5px soild white',
        borderRadius: '15%',
        marginLeft: '40vw'
    },

    signUpButton: {
        color: 'white',
        fontSize: '70%',
        marginLeft: '2vw',
        borderRadius: '8%',
        backgroundColor: 'rgb(39,129,231)'  
    },

    div2: {
        color: 'white',
        position: 'absolute',
        paddingTop: '20%',
        paddingLeft: '15%',
        fontSize: '200%'
    },

    div21 : {
    },

    div22: {
        position: 'absolute',
        fontSize: '70%',
        paddingLeft: '2%',
    },
    div23: {  
    },

    button1:{
        display: 'flex',
        paddingTop: '7%',  
    },

    div23Button: {
        color: 'white',
        marginLeft: '1vw',
        backgroundColor: 'rgb(39,129,231)',
    },

    secondContainer: {
        position: 'absolute',
        maxWidth: '50%',
        height: '50vh',
        marginTop: '-4%',
        marginLeft: '15%',
        backgroundColor: 'beige',
        borderRadius: '2.6%'
    },

    secondContainerDiv1: {
        marginTop: '8%',
    },

    secondContainerDiv11: {
        fontSize: '200%'
    },

    secondContainerDiv2: {
        position: 'absolute',
        marginTop: '5%'
    },

    secondContainerDiv21: {
        display: 'flex'
    },

    secondContainerDiv211: {
        display: 'flex'
    },

    checkCircleIcon: {
        color: 'blue',
    },

    secondContainerDiv2111: {
        marginLeft: '1vw'
    },
    checkCircleIcon: {
        color: 'blue',
    },

    secondContainerDiv12: {
        color: 'grey',

    },

    secondContainerDiv2: {
        position: 'absolute',
        marginTop: '5%'
    },

    secondContainerDiv21: {
        display: 'flex'
    },

    secondContainerDiv211: {
        display: 'flex'
    },

    checkCircleIcon: {
        color: 'blue',
    },

    secondContainerDiv2111: {
        marginLeft: '1vw'
    },
    checkCircleIcon: {
        color: 'blue',
    },

    thirdContainer: {
        marginTop: '50vh',
        maxWidth: '100%',
        height: '60vh',
        backgroundImage: `url(${thirdContainerImage})`,
        position: 'absolute'
    },

    thirdContainerContainer: {
        borderRadius: '4%',
        backgroundColor: 'white',
        maxWidth: '27%',
        position: 'absolute',
        marginTop: '22%',
        marginLeft: '5%',
        height: '80vh'
    },

    icons: {
        marginTop: '20%',
        marginBottom: '20%'
    },

    thirdContainerContainerdiv1: {
        marginBottom: '6%',
        fontSize: '4vh'
    },

    thirdContainerContainerdiv2: {
        fontSize: '2.8vh',
        marginBottom: '6%'
    },

    thirdContainerContainerdiv3: {
        fontSize: '2.6vh',
        color: 'grey'
    }


})