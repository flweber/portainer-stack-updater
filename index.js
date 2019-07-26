#!/usr/bin/env node
const request = require("request");
const _ = require("lodash");
const fs = require("fs");
const path = require("path");

const args = {
    env: process.argv[2],
    project: process.argv[3],
    portainersystem: process.argv[7] || `http://localhost:9001/api`,
    user: process.argv[4],
    password: process.argv[5],
    compose: process.argv[6]
};

request({
    method: "POST",
    uri: args.portainersystem + "/auth",
    headers: {
        "content-type": "applocation/json"
    },
    body: JSON.stringify({
        Username: args.user,
        Password: args.password
    })
}, (err, res, auth) => {
    if(err) return console.error(err);
    auth = JSON.parse(auth);
    request({
        method: "GET",
        uri: args.portainersystem + "/stacks",
        headers: {
            "content-type": "applocation/json",
            "Authorization": "Bearer " + auth.jwt
        }
    }, (err, res, stacks) => {
        if(err) return console.error(err);
        stacks = JSON.parse(stacks);
        const stackID = _.find(stacks, ["Name", args.project]).Id;
        const compose = fs.readFileSync(path.resolve(args.compose), {encoding: "utf8"});
        request({
            method: "PUT",
            uri: `${args.portainersystem}/stacks/${stackID}?endpointId=1`,
            headers: {
                "content-type": "applocation/json",
                "Authorization": "Bearer " + auth.jwt
            },
            body: JSON.stringify({
                StackFileContent: compose
            })
        }, (err, res, body) => {
            if(err) return console.error(err);
            console.log(body);
        });
    });
});