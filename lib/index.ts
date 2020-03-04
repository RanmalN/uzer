import {getRequest} from './Service/HttpHandler';


/**
 * @Method: Returns the user permission according  to user email
 * @Param {string,string,string}
 * @Return {[string]}
 */
export async function getAppPermissionsByEmail(email: string, token: string, appName?: string,) {
  try {
    // @ts-ignore
    const BaseUrl: string = process.env.USER_API_URL;
    if (!BaseUrl) {
      return console.log('Please define the User Api Backend base url as an environment variable ', BaseUrl);
    }
    console.log('Sending Get request to server to retrieve permissions');
    let response;
    if (appName) {
      response = await getRequest(BaseUrl, "email/" + email + "?App%20Name=" + appName, token);
    } else {
      response = await getRequest(BaseUrl, "email/" + email, token);
    }
    console.log('User permissions retrieved successfully', response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

/**
 * @Method: Returns the user permission according  to user id
 * @Param {string,string,string}
 * @Return {[string]}
 */
export async function getAppPermissionsByUserId(userId: string, token: string, appName?: string) {
  try {
    // @ts-ignore
    const BaseUrl: string = process.env.USER_API_URL;
    if (!BaseUrl) {
      return console.log('Please define the User Api Backend base url as an environment variable ', BaseUrl);
    }
    console.log('Sending Get request to server to retrieve permissions : ');
    let response;
    if (appName) {
      response = await getRequest(BaseUrl, "contact_id/" + userId + "?App%20Name=" + appName, token);
    } else {
      response = await getRequest(BaseUrl, "contact_id/" + userId, token);
    }
    console.log('User permissions retrieved successfully', response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}