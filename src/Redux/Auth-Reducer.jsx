import {loginAPI} from "../api/api";
import {stopSubmit} from 'redux-form'



const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,

}

const authReducer = (state = initialState, action) => {

    switch(action.type){
        case SET_USER_DATA:
        return {
                ...state,
           ...action.payload,
        }


        default: return state;
    }
}


export const setAuthUserData = (userId, email, login, isAuth) =>({type: SET_USER_DATA, payload: {userId, login, email, isAuth}})

export const getAuthUserData = () => (dispatch) => {
           loginAPI.getAuthMe()
               .then(data => {
               if(data.resultCode === 0){
                   let {id, login, email} = data.data;
                   dispatch(setAuthUserData(id, email, login, true))
               }
           })
return 'hello'
}

export const login = (email, password, rememberMe) => (dispatch) => {
           loginAPI.login(email, password, rememberMe)
               .then(data => {
               if(data.resultCode === 0){
                   dispatch(getAuthUserData())
               }
               else {
                   let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
                   dispatch(stopSubmit('login', {_error: message}));

               }
           })}

export const logout = () => (dispatch) => {

           loginAPI.logout()
               .then(data => {
               if(data.resultCode === 0){
                   dispatch(setAuthUserData(null, null, null, false))
               }
           })}



export default authReducer;