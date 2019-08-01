# Portainer Update

This tool can be used to update a stack via the [portainer project](https://www.portainer.io/).

## Feature list

- [X] Update existing stacks
- [X] Read a docker-compose file from file system
- [X] Make tool available through npx
- [X] Deploy new stacks

## Usage

==Attention: Portainer only supports compose file version 2 at the moment==

### Example Usage

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
