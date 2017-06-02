/**
 * Created by surajnew55 on 25/05/2017.
 */
import AppDispatcher from '../dispatchers/AppDispatcher.js';
import LOGIN_USER from '../constants/LoginConstants';
import LOGOUT_USER from '../constants/LoginConstants';
import RouterContainer from '../services/RouterContainer';


export default {

    loginUser: (jwt) => {
        console.log(jwt);
        var savedJwt = localStorage.getItem('jwt');
        AppDispatcher.dispatch({
            actionType: LOGIN_USER,
            jwt: jwt


        });

           if (savedJwt !== jwt) {
               localStorage.setItem('jwt', jwt)

               

           }
           },


    logoutUser: () => {
        RouterContainer.get().transitionEnter('/home');
        localStorage.removeItem('jwt');
        AppDispatcher.dispatch({
            actionType:LOGOUT_USER
        });
    }
}