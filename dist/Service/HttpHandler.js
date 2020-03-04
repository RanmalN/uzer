"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
function postRequest(baseUrl, url, token, data) {
    if (data === void 0) { data = {}; }
    return axios_1.default.post(baseUrl + url, data, {
        headers: getHeaders(token)
    });
}
exports.postRequest = postRequest;
function getRequest(baseUrl, url, token) {
    return axios_1.default.get(baseUrl + url, {
        headers: getHeaders(token)
    });
}
exports.getRequest = getRequest;
function deleteRequest(baseUrl, url, token) {
    return axios_1.default.delete(baseUrl + url, {
        headers: getHeaders(token)
    });
}
exports.deleteRequest = deleteRequest;
function putRequest(baseUrl, url, token, data) {
    if (data === void 0) { data = {}; }
    return axios_1.default.put(baseUrl + url, data, {
        headers: getHeaders(token)
    });
}
exports.putRequest = putRequest;
function patchRequest(baseUrl, url, token, data) {
    if (data === void 0) { data = {}; }
    return axios_1.default.patch(baseUrl + url, data, {
        headers: getHeaders(token)
    });
}
exports.patchRequest = patchRequest;
function getHeaders(token) {
    return {
        authorization: 'Basic YWRtaW46cGFzc3dvcmQ=',
        'Content-Type': 'application/json'
    };
}
exports.getHeaders = getHeaders;
