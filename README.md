# Portainer Update
This tool can be used to update a stack via the [portainer project](https://www.portainer.io/).
## Feature list

 - [X] Update existing stacks
 - [X] Read a docker-compose file from file system
 - [X] Make tool available through npx
 - [ ] Deploy new stacks
 
 ## Usage
 
 ```bash
npx portainer-update <Environment> <Stackname> <Portainer Username> <Password> <Portainer API URL>
```

|Parameter|Description|Required|
|--|:--|:--:|
|Envrionment|At the moment this parameter has no effect|**X**|
|Stackname|The name of the stack you want to update|**X**|
|Portainer Username|The username of the user which will update the stack ==The user need the permission to edit the stack==|**X**|
|Portainer Password|This tool is for use in CiCD pipelines so please provide the password as a secret variable|**X**|
|Portainer API URL|The address where to find portainer API (The url you are browsing to in your browser with the extension `/api`)|Default value: `http://localhost:9001/api`|