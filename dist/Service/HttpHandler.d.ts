import { AxiosResponse } from 'axios';
import RequestHeader from '../dto/requests/RequestHeader';
export declare function postRequest(baseUrl: string, url: string, token: string, data?: any): Promise<AxiosResponse<any>>;
export declare function getRequest(baseUrl: string, url: string, token: string): Promise<AxiosResponse<any>>;
export declare function deleteRequest(baseUrl: string, url: string, token: string): Promise<AxiosResponse<any>>;
export declare function putRequest(baseUrl: string, url: string, token: string, data?: any): Promise<AxiosResponse<any>>;
export declare function patchRequest(baseUrl: string, url: string, token: string, data?: any): Promise<AxiosResponse<any>>;
export declare function getHeaders(token: string): RequestHeader;
