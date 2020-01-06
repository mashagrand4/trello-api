import request from "request";

export default () => {
    return new Promise((resolve, reject) => {
        request({
            method: 'GET',
            url: 'https://d.la1-c2cs-lo2.salesforceliveagent.com/chat/rest/System/SessionId',
            headers: {
                'User-Agent': 'request',
                'X-LIVEAGENT-AFFINITY': null,
                'X-LIVEAGENT-API-VERSION': '46',
            }
        }, function (error, response, body) {
            if (error){
                return reject({ error })
            } else {
                const resp = JSON.parse(body);

                return resolve({
                    affinityToken: resp.affinityToken,
                    key: resp.key,
                    sessionId: resp.id,
                });
            }
        });
    })
};