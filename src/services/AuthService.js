/**
 * Created by surajnew55 on 25/05/2017.
 */
import request from 'reqwest';
import when from 'when';

import LoginActions from '../actions/LoginActions';

class AuthService {

    login(email, password) {
        return this.handleAuth(when(request({
            url: 'http://localhost:3001/user_token',
            method: 'POST',
            crossOrigin:'true',
            type: 'json',
            data: {
                "auth":{"email":email,"password":password}}
        })));
    }

    logout() {
        LoginActions.logoutUser();
    }

    signup(email, password) {
        return this.handleAuth(when(request({
            url: 'http://localhost:3001/users',
            method: 'POST',
            crossOrigin: true,
            type: 'json',
            data: {
                "user":{"email":email,"password":password}            }
        })));
    }

    handleAuth(loginPromise) {
        return loginPromise
            .then(function(response){
                var jwt = response.jwt;
                LoginActions.loginUser(jwt);
                return true;
            });
    }
}

export default new AuthService()