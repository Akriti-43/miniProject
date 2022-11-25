import * as api from '../api/index';


export const registerRestaurant = (formData, navigate) => async(dispatch) => {
    try{
        console.log(formData);
        const { data } = await api.registerRestaurant(formData);
        if(data.message == 'Success'){
            navigate('/dashboard');
        }
    }catch(error){
    }
}



