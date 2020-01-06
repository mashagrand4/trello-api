import request from "request";
import constants from "../constants/constants";

export default (options) => {
    return new Promise((resolve, reject) => {
        console.log(options);
        request({
            method: 'POST',
            url: 'https://services.kommunicate.io/rest/ws/message/v2/send',
            headers: {
                'User-Agent': 'request',
                'Api-Key': constants.apiKey,
                'Content-type':'application/json',
                'Of-User-Id': options.userId,
            },
            body: JSON.stringify({
                    "groupId": options.groupId,
                    "fromUserName": options.agentId,
                    "message": options.message,
                    "metadata":{
                        "CONVERSATION_ASSIGNEE": options.agentId,
                    }
                }
            ),
        }, (error, response, body) => {
            if (error){
                return reject(error);
            } else {
                return resolve(body);
            }
        });
    });
};