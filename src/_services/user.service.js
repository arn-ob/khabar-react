import { Promise, reject } from "q";
import { resolve } from "dns";

export const userService = {
    login,
    logout
};

// Here Login Http Request
function login(username, password) {
    return new Promise((resolve, reject) => {
        localStorage.setItem('user', JSON.stringify({"admin":"arnob"}));
        const user = "arnob";
        if(user == null){
            reject(true);
        } else {
            resolve(user);
        }
    })
    
   
    
    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ username, password })
    // };

    // return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
    //     .then(handleResponse)
    //     .then(user => {
    //         // store user details and jwt token in local storage to keep user logged in between page refreshes
           

    //         return user;
    //     });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}
