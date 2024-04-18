import axios from "axios"
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS ,FETCH_USERS_FAILURE } from "./customerTypes"
const fetchUserRequest = () =>{
    return{
        type: FETCH_USERS_REQUEST
    }
}
const fetchUserSuccess = users =>{
    return{
        type: FETCH_USERS_SUCCESS,
        payload :users,
    }
}
const fetchUsersFailure = error =>{
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}
export const fetchUsers =() =>{
    return(dispatch) =>{
        dispatch(fetchUserRequest)
        return axios.get('http://localhost:5000/customers')
        .then((res) => {
            dispatch(fetchUserSuccess(res.data))
        }).catch((err)=>{
            dispatch(fetchUsersFailure(err.message))
        })
    }
}