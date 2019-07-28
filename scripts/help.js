module.exports = (exitCode) => {
    console.info("Usage: npx portainer-update <Environment> <Stackname> <Portainer Username> <Password> <Path to compose> <Portainer API URL>");
    console.table([
        {
            Parameter: "Envrionment", Description: "At the moment this parameter has no effect", Required: "X"
        },
        {
            Parameter: "Stackname", Description: "The name of the stack you want to update", Required: "X"
        },
        {
            Parameter: "Portainer Username", Description: "The username of the user which will update the stack", Required: "X"
        },
        {
            Parameter:"Portainer Password",Description: "Password for the user", Required: "X"
        },
        {
            Parameter: "Path to compose",Description: "Fill in the path to the compose file, which you want to deploy",Required: "X"
        },
        {
            Parameter: "Portainer API URL",Description: "The address where to find portainer API", Required: ""
        }
    ], ["Parameter", "Description", "Required"]);
    process.exit(exitCode || 0);
};