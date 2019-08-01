const request = require("request");

module.exports = async (user, password, url) => {
    return new Promise((resolve, reject) => {
        request({
            method: "POST",
            uri:  url + "/auth",
            headers: {
                "content-type": "applocation/json"
            },
            body: JSON.stringify({
                Username: user,
                Password: password
            })
        }, (err, response, body) => {
            if(err) return reject(err);
            body = JSON.parse(body);
            if(body.err) return reject(body.err);
            return resolve(body);
        });
    });
};