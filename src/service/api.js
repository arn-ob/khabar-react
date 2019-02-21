//import request from './'
import axios from 'axios'
const baseAddress = 'http://picosoft-001-site15.gtempurl.com/api/'
//const baseAddress = 'http://localhost:49477/api/'


/**
 * 
 * @param {string} path This is the path of the API
 * @param {object} params This it the body(JSON) of the post
 */
// export async function post(path, params) {
//     return request(path, {
//       method: 'POST',
//       body: {
//         ...params,
//         method: 'post',
//       },
//     });
//   }

  /**
   * 
   * @param {string} path This is the path of the API
   */
  // export async function get(path) {
  //   return request(path);
  // }
  
  export const GetItemsList = (url) => {
    url=`${baseAddress}${url}`;
    return axios.post(url).then(res=>(res.data.Content)).catch(e => { console.log('error'+JSON.stringify(e))})
}

export const GetItem = (url) => {
  url=`${baseAddress}${url}`;
  return axios.get(url).then(res=>(res.data.Content)).catch(e => { console.log('error'+JSON.stringify(e))})
}

