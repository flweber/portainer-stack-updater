const request = require("request");
const _ = require("lodash");

module.exports = async (token, url, project) => {
    return new Promise((resolve, reject) => {
        request({
            method: "GET",
            uri:  url + "/stacks",
            headers: {
                "content-type": "application/json",
                "Authorization": "Bearer " + token
            },
        }, (err, response, body) => {
            if(err) return reject(err);
            const stacks = JSON.parse(body);
            try {
                const stackID = _.find(stacks, ["Name", project]).Id;
                return resolve(stackID);
            } catch(err) {
                return reject(err);
            }
        });
    });
};