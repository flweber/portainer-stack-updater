[![Build Status](https://ci.p.webish.one/buildStatus/icon?style=flat-square&job=portainer-stack-updater)](https://ci.p.webish.one/job/portainer-stack-updater/job/master/) ![npm (tag)](https://img.shields.io/npm/v/portainer-update/latest?style=flat-square) ![npm](https://img.shields.io/npm/v/portainer-update?style=flat-square) [![GitHub issues](https://img.shields.io/github/issues/flweber/portainer-stack-updater?style=flat-square)](https://github.com/flweber/portainer-stack-updater/issues) ![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/flweber/portainer-stack-updater?style=flat-square) ![npm](https://img.shields.io/npm/dt/portainer-update?style=flat-square) [![GitHub license](https://img.shields.io/github/license/flweber/portainer-stack-updater?style=flat-square)](https://github.com/flweber/portainer-stack-updater/blob/master/LICENSE) 
# Portainer Update
This tool can be used to update a stack via the [portainer project](https://www.portainer.io/).
## Feature list

 - [X] Update existing stacks
 - [X] Read a docker-compose file from file system
 - [X] Make tool available through npx
 - [X] Deploy new stacks
 - [X] Command line tool
 
 ## Usage
 
==Attention: Portainer only supports compose file version 2 at the moment==

### Example Usage
## As package
```javascript
const { Auth, Deploy, Update, GetStackByName } = require('portainer-update');
const url = "http://localhost:9000/api";

Auth("username", "password", url)
	.then(async (response) => {
		const stacks = [];
		
		const stackid = await GetStackByName(response.jwt, url, "stackname");
		
		// JsonWebToken, Portainer api url, id of stack which should be updated, 
		// endpoint id, docker compose as string
		stacks.push(await Update(response.jwt, url, stackid, 1, "compose string"));

		// JsonWebToken, Portainer api url, name of the new stack which will be deployed, 
		// endpoint id, docker compose as string
		stacks.push(await Deploy(response.jwt, url, "stackname", 1, "compose string"));
		console.info(JSON.stringify(stacks));
	});


```
## In Terminal
 ```bash
npx portainer-update -p <Stackname> -u <Portainer Username> --password <Portainer Password> -f <Path to docker compose> -s <Portainer URL>
```

### Parameters

|Parameter|Name|Description|Required|
|:--:|--|:--|:--:|
|-h \| --help|Help|Show this parameter table||
|-e \| --env|Envrionment|At the moment this parameter has no effect||
|-p \| --project|Stackname|The name of the stack you want to update|**X**|
|-u \| --user|Portainer Username|The username of the user which will update the stack ==The user need the permission to edit the stack==|**X**|
|--password|Portainer Password|This tool is for use in CiCD pipelines so please provide the password as a secret variable|**X**|
|-f \| --compose|Path to compose|Fill in the path to the compose file, which you want to deploy|**X**|
|-s \| --portainersystem|Portainer API URL|The address where to find portainer API (The url you are browsing to in your browser)|Default value: `http://localhost:9000`|
|--endpoint|Endpoint ID|The id of the endpoint where the stack should be deployed|Default value: `1`|