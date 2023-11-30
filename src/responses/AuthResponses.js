import axios from "axios";
import { useDispatch } from "react-redux";
import { store } from '../store';
import { SetAuth } from '../store/UserReducer'
import { getUser } from "./UserResponses";
import { getRoutes } from "./RoutesResponses";

export const registration = async (name, surname, email, password) => {
    try {
        const response = await axios.post('http://localhost:8080/api/registartion', {
            name: name,
            surname: surname,
            login: email,
            password: password
        })
        alert("Регистрация прошла успешно")
    } catch (error) {
        alert("Not okay")
    }
    
}

export const login = async (email, password) => {
    try {
        const response = await axios.post('http://localhost:8080/api/login', {
            "username": email,
            "password": password
        })
        store.dispatch(SetAuth(response.data.token))
        console.log(response.data)
        getUser(response.data.token)
        getRoutes(response.data.token)
    } catch (error) {
        alert(error.message)
    }
}