const request = require("request");
const fs = require("fs");

module.exports = async (token, url, stack, endpoint, composeFile) => {
    return new Promise((resolve, reject) => {
        const compose = fs.readFileSync(composeFile, {encoding: "utf8"});
        request({
            method: "PUT",
            uri:  url + `/stacks/${stack}?endpointId=${endpoint}`,
            headers: {
                "content-type": "applocation/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify({
                StackFileContent: compose
            })
        }, (err, response, body) => {
            if(err) return reject(err);
            body = JSON.parse(body);
            if(body.err) return reject(body.err);
            return resolve(body);
        });
    });
};