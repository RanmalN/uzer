import axios, {AxiosResponse} from 'axios';
import RequestHeader from '../dto/requests/RequestHeader';


export function postRequest(baseUrl: string, url: string, token: string, data: any = {}): Promise<AxiosResponse<any>> {
    return axios.post(baseUrl + url, data, {
        headers: getHeaders(token)
    });
}

export function getRequest(baseUrl: string, url: string, token: string): Promise<AxiosResponse<any>> {
    return axios.get(baseUrl + url, {
        headers: getHeaders(token)
    });
}

export function deleteRequest(baseUrl: string, url: string, token: string): Promise<AxiosResponse<any>> {
    return axios.delete(baseUrl + url, {
        headers: getHeaders(token)
    });
}

export function putRequest(baseUrl: string, url: string, token: string, data: any = {}): Promise<AxiosResponse<any>> {
    return axios.put(baseUrl + url, data, {
        headers: getHeaders(token)
    });
}

export function patchRequest(baseUrl: string, url: string, token: string, data: any = {}): Promise<AxiosResponse<any>> {
    return axios.patch(baseUrl + url, data, {
        headers: getHeaders(token)
    });
}

export function getHeaders(token: string): RequestHeader {
    return {
        authorization: 'Basic YWRtaW46cGFzc3dvcmQ=',
        'Content-Type': 'application/json'
    };
}
