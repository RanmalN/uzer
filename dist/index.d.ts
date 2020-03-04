/**
 * @Method: Returns the user permission according  to user email
 * @Param {string,string,string}
 * @Return {[string]}
 */
export declare function getAppPermissionsByEmail(email: string, token: string, appName?: string): Promise<any>;
/**
 * @Method: Returns the user permission according  to user id
 * @Param {string,string,string}
 * @Return {[string]}
 */
export declare function getAppPermissionsByUserId(userId: string, token: string, appName?: string): Promise<any>;
