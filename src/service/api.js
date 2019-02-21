import request from './'

/**
 * 
 * @param {string} path This is the path of the API
 * @param {object} params This it the body(JSON) of the post
 */
export async function post(path, params) {
    return request(path, {
      method: 'POST',
      body: {
        ...params,
        method: 'post',
      },
    });
  }

  /**
   * 
   * @param {string} path This is the path of the API
   */
  export async function get(path) {
    return request(path);
  }
  