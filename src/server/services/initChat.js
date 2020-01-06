import request from 'request';

export default (options) => {
    return new Promise((resolve, reject) => {
        request({
            method: 'POST',
            url: 'https://d.la1-c2cs-lo2.salesforceliveagent.com/chat/rest/Chasitor/ChasitorInit',
            headers: {
                'User-Agent': 'request',
                'X-LIVEAGENT-API-VERSION': '46',
                'X-LIVEAGENT-AFFINITY': options.affinityToken,
                'X-LIVEAGENT-SESSION-KEY': options.key,
                'X-LIVEAGENT-SEQUENCE': '1'
            },
            body: JSON.stringify({
                    "organizationId": "00D8E00000018V8",
                    "deploymentId": "572b0000000LADR",
                    "buttonId": "573b0000000LAt5",
                    "sessionId": options.sessionId,
                    "userAgent": "Lynx/2.8.8",
                    "language": "en-US",
                    "screenResolution": "1900x1080",
                    "visitorName": "Frank Underwood",
                    "prechatDetails": [], "prechatEntities": [],
                    "receiveQueueUpdates": true,
                    "isPost": true
                }
            ),
        }, function (error, response, body) {
            if (error) {
                return reject(error);
            } else {
                return resolve(body);
            }
        });
    });
};