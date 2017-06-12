/**
 * Created by surajnew55 on 25/05/2017.
 */


export default {

    loginUser: (jwt) => {
        console.log(jwt);
        localStorage.setItem('jwt', jwt);
    },

    logoutUser: () => {
        localStorage.removeItem('jwt');
    }
}