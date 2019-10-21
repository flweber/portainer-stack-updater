#!/usr/bin/env node
const arg = require("arg");
const Script = require(".");

const execute = async () => {
    
    let args = undefined;

    try {
        args = arg({
            "--help": Boolean,
            "--env": String,
            "--project": String,
            "--portainersystem": String,
            "--user": String,
            "--password": String,
            "--compose": String,
            "--endpoint": String,
            "-h": "--help",
            "-e": "--env",
            "-p": "--project",
            "-s": "--portainersystem",
            "-u": "--user",
            "-f": "--compose"
        });
    } catch(err) {
        console.error(err);
        Script.Help(1);
    }

    if(args["--help"]) {
        Script.Help();
    }
    
    const url = Script.CheckUrl(args["--portainersystem"]);

    if(!args["--endpoint"]) args["--endpoint"] = "1";

    console.info(`Authenticating against ${url}`);
    const auth = await Script.Auth(args["--user"], args["--password"], url);
    
    let stackID = undefined;
    let deploy = false;

    try {
        console.info(`Check if ${args["--project"]} already exists`);
        stackID = await Script.GetStackByName(auth.jwt, url, args["--project"]);
    } catch(err) {
        deploy = true;
    }

    let stack = undefined;

    try {
        if(deploy) {
            console.info(`Deploy ${args["--project"]} as new project`);
            stack = await Script.Deploy(auth.jwt, url, args["--project"], args["--endpoint"], args["--compose"]);
        } else  {
            console.info(`Updating ${args["--project"]}...`);
            stack = await Script.Update(auth.jwt, url, stackID, args["--endpoint"], args["--compose"]);
        }
    } catch(err) {
        console.error(err);
        process.exit(1);
    }

    console.info(JSON.stringify(stack));
    process.exit(0);

};

execute();