class SendResponse {
    send(reply, response) {
        if (!response.statusCode) {
            response = {
                statusCode: 503,
                details: {
                    message: "Something went wrong, try again later",
                }
            };
        }
        if (response.statusCode < 100)
            response.statusCode = 503

        switch (response.statusCode) {
            case 400:
                {
                    response = {
                        "code":400,
                        "message": "Bad Request",
                        "content": {
                            "errorCode": 'GN-400',
                            ...response.details
                        }
                    };
                    break;
                }
            case 403:
                {
                    response = {
                        "code":403,
                        "message": "Forbidden",
                        "content": {
                            "errorCode": 'GN-403',
                            ...response.details
                        }
                    };
                    break;
                }
            case 404:
                {
                    response = {
                        "code":404,
                        "message": "Not Found",
                        "content": {
                            "errorCode": 'GN-404',
                            ...response.details
                        }
                    };
                    break;
                }
            case 401:
                {
                    response = {
                        "code":401,
                        "message": "Unauthorised User",
                        "content": {
                            "errorCode": 'GN-401',
                            ...response.details
                        }
                    };
                    break;
                }
            case 409:
                {
                    response = {
                        "code":409,
                        "message": "Conflict",
                        "content": {
                            "errorCode": 'GN-409',
                            ...response.details
                        }
                    };
                    break;
                }
            case 412:
                {
                    response = {
                        "code":412,
                        "message": "Precondition failed",
                        "content": {
                            "errorCode": 'GN-412',
                            ...response.details
                        }
                    };
                    break;
                }
            case 419:
                {
                    response = {
                        "code":419,
                        "message": "Token Expired",
                        "content": {
                            "errorCode": 'GN-419',
                            ...response.details
                        }
                    };
                    break;
                }
            case 429:
                {
                    response = {
                        "code":429,
                        "message": "Limit exceeded",
                        "content": {
                            "errorCode": 'GN-429',
                            ...response.details
                        }
                    };
                    break;
                }
            case 502:
                {
                    response = {
                        "code":502,
                        "message": "Bad Gateway",
                        "content": {
                            "errorCode": 'GN-502',
                            ...response.details
                        }
                    };
                    break;
                }
            case 503:
                {
                    response = {
                        "code":503,
                        "message": "Service Unavailable",
                        "content": {
                            "errorCode": 'GN-503',
                            ...response.details
                        }
                    };
                    break;
                }
            case 504:
                {
                    response = {
                        "code":504,
                        "message": "Timeout",
                        "content": {
                            "errorCode": 'GN-504',
                            ...response.details
                        }
                    };
                    break;
                }
            case "AUTH-001":
                {
                    response = {
                        "code":400,
                        "message": "Bad Request",
                        "content": {
                            "errorCode": 'AUTH-001',
                            ...response.details,
                            "message": "Email already taken"
                        }
                    };
                    break;
                }
            case "AUTH-002":
                {
                    response = {
                        "code":412,
                        "message": "Precondition failed",
                        "content": {
                            "errorCode": 'AUTH-002',
                            ...response.details,
                            "message": "Your account has not been verified yet. Kindly verify your account before signing in"
                        }
                    };
                    break;
                }
            case 200:
                {
                    response = {
                        "code":200,
                        "message": "Success",
                        "content": response.details
                    };
                    break;
                }
            case 204:
                {
                    response = {
                        "code":204,
                        "message": "No Content",
                        "content": response.details
                    }
                }

        }//switch
        reply.status(response.code);
        return reply.json(response);

    }
}
module.exports = new SendResponse()
