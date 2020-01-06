import request from "request";

export default (options) => {
    return new Promise((resolve, reject) => {
        console.log(options);
        request({
            method: 'POST',
            url: 'https://services.kommunicate.io/rest/ws/message/v2/send',
            headers: {
                'User-Agent': 'request',
                'Api-Key': options.apiKey,
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                "groupId": options.groupId,
                "message": options.message.text,
                "fromUserName": options.agentId
            }),
        }, (error, response, body) => {
            if (error) {
                return reject(error);
            } else {
                return resolve(body);
            }
        })
    })
};