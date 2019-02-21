import {
    local,
    server
} from '../global.settings';

/**
 * 
 * @param {string} url path of API
 * @param {object} option this is body
 */
export default function request(url, option) {

    // detect production mode and dev mode
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        // dev code
        url = local + url;
    } else {
        // production code
        url = server + url;
    }

    /**
     * Header Making Progress
     */
    // get token from localstorage
    const token = localStorage.getItem('token');

    // for same origin
    const defaultOptions = {
        credentials: 'same-origin',
    };
    const newOptions = {
        ...defaultOptions,
        ...option
    };

    if (
        newOptions.method === 'POST' ||
        newOptions.method === 'GET' ||
        newOptions.method === 'PUT' ||
        newOptions.method === 'DELETE'
    ) {
        if (!(newOptions.body instanceof FormData)) {
            newOptions.headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
                ...newOptions.headers,
            };
            newOptions.body = JSON.stringify(newOptions.body);
        } else {
            // newOptions.body is FormData
            newOptions.headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
                ...newOptions.headers
            };
        }
    }

    if (token === null) {
        console.log('No token Found, This is for login');
    } else {
        newOptions.headers = {
            Authorization: token,
            ...newOptions.headers
        }
    }


    return fetch(url, newOptions)
        .then(checkStatus)
        .then(response => cachedSave(response, hashcode))
        .then(response => {
            // console.log('Request', response);

            if (newOptions.method === 'DELETE' || response.status === 204) {
                return response.text();
            }
            return response.json();
        })
        .catch(e => {
            console.log("Request Failed");
        });
}