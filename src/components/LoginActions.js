/**
 * Created by surajnew55 on 25/05/2017.
 */


export default {

    loggedIn: () => {
        let jwt = localStorage.getItem('jwt');
        console.log(jwt);
            if(jwt !==null)
            {
                console.log('I am truee');
                return true;
            }
            console.log('I am false');
            return false;
    }
}