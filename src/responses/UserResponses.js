import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { store } from '../store';
import { SetAuth } from '../store/UserReducer'
import { SetUser } from "../store/UserReducer";

function GetToken(){
    const token = useSelector(state => state.user.token)
    return (
        token
    )
}

export const getUser = async (token) => {
    try {
        const response = await axios.get('http://localhost:8080/api/myUser', 
        {
            headers: {Authorization: `Bearer ${token}`}
        })
        store.dispatch(SetUser(response.data))
        console.log(response.data)
    } catch (error) {
        console.log(error.message)
    }
    
}