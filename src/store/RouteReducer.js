const ADD_ROUTE = "ADD_ROUTE"


const routeState = {
    routes: {}
}

export const RouteReducer = (state = routeState, action) => {
    switch (action.type) {
        case ADD_ROUTE:
            return{
                ...state,
                routes: action.payload
            }
    
        default:
            return state;
    }
}

export const addNewRoute = data => ({type: ADD_ROUTE, payload: data})