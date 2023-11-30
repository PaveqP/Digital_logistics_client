import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { store } from '../store';
import { SetAuth } from '../store/UserReducer'
import { SetUser } from "../store/UserReducer";
import { addNewRoute } from "../store/RouteReducer";

export const addRoute = async (number, exit_date, enter_date, exit_city, enter_city, token) => {
    console.log(token)
    try {
        const response = await axios.post('http://localhost:8080/api/routes', 
        {
            number: number,
            exit_date: exit_date,
            enter_date: enter_date,
            exit_city: exit_city,
            enter_city: enter_city
        },
        {
            headers: {Authorization: `Bearer ${token}`},
            
        })
        console.log(response.data)
        getRoutes(token)
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const getRoutes = async (token) => {
    try {
        const response = await axios.get('http://localhost:8080/api/routes', 
        {
            headers: {Authorization: `Bearer ${token}`}
        })
        store.dispatch(addNewRoute(response.data))
        let data = response.data
        return data
    } catch (error) {
        alert(error.response.data.message)
    }
}