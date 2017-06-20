/**
 * Created by surajnew55 on 25/05/2017.
 */


export default {

    loggedIn: () => {
        let jwt = localStorage.getItem('jwt');
        if (jwt !== null) {
            return true;
        }
        return false;
    }
}