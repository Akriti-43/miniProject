import * as api from '../api/index';



export const signIn = (formData, navigate) => async(dispatch) => {
    try{
        const { data } = await api.signIn(formData);
        if(data.message == "User doesn't exist."){
            alert(data.message);
        }else if(data.message == 'Invalid credentials'){
            alert(data.message);
        }else if(data.message == "No Registered Restaurant"){
            dispatch({ type: 'AUTH', data});
            navigate('/restaurantRegistration');
        }else{
            dispatch({ type: 'AUTH', data});
            navigate('/dashboard');
        }
    }catch(error){
        alert("Incorrect Login credentials.")
        console.log(error);
    }
}


export const signUp = (formData, navigate) => async(dispatch) => {
    try{
        const { data } = await api.signUp(formData);
        if(data.message == 'User already exists.'){
            alert(data.message);
        }else{
            dispatch({ type: 'AUTH', data})
            navigate('/dashboard');
        }
    }catch(error){
        alert("Password did not match.")
    }
}