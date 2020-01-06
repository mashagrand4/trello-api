import request from "request";

export default (options) => {
    return new Promise((resolve, reject) => {
        request({
            method: 'POST',
            url: 'https://d.la1-c2cs-lo2.salesforceliveagent.com/chat/rest/Chasitor/ChatMessage',
            headers: {
                'User-Agent': 'request',
                'X-LIVEAGENT-AFFINITY' : options.affinityToken,
                'X-LIVEAGENT-SESSION-KEY' : options.key,
                'X-LIVEAGENT-API-VERSION': '46',
            },
            body: JSON.stringify({
                text : options.message,
            })
        }, function (error, response, body) {
            if (error){
                return reject(error)
            } else {
                return resolve(body);
            }
        });
    });
}