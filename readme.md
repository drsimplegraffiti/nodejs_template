

##### App check


![n](https://user-images.githubusercontent.com/70065792/163243621-753ced7c-4bd4-4e5c-ab81-99cbab6f0ffc.PNG)

> npm audit
> npm outdated

#### deploy on elastic beanstalk aws instance

eb init

```javascript
Select a default region
1) us-east-1 : US East (N. Virginia)
2) us-west-1 : US West (N. California)
3) us-west-2 : US West (Oregon)
4) eu-west-1 : EU (Ireland)
5) eu-central-1 : EU (Frankfurt)
6) ap-south-1 : Asia Pacific (Mumbai)
7) ap-southeast-1 : Asia Pacific (Singapore)
8) ap-southeast-2 : Asia Pacific (Sydney)
9) ap-northeast-1 : Asia Pacific (Tokyo)
10) ap-northeast-2 : Asia Pacific (Seoul)
11) sa-east-1 : South America (Sao Paulo)
12) cn-north-1 : China (Beijing)
13) cn-northwest-1 : China (Ningxia)
14) us-east-2 : US East (Ohio)
15) ca-central-1 : Canada (Central)
16) eu-west-2 : EU (London)
17) eu-west-3 : EU (Paris)
18) eu-north-1 : EU (Stockholm)
19) eu-south-1 : EU (Milano)
20) ap-east-1 : Asia Pacific (Hong Kong)
21) me-south-1 : Middle East (Bahrain)
22) af-south-1 : Africa (Cape Town)
(default is 3): 1
```

---

```javascript


Enter Application Name
(default is "node_template"):
Application node_template has been created.
```

```javascript
It appears you are using Node.js. Is this correct?
(Y/n): y
Select a platform branch.
1) Node.js 16 running on 64bit Amazon Linux 2
2) Node.js 14 running on 64bit Amazon Linux 2
3) Node.js 12 running on 64bit Amazon Linux 2 (Deprecated)
4) Node.js 10 running on 64bit Amazon Linux 2 (Deprecated)
5) Node.js running on 64bit Amazon Linux (Deprecated)
(default is 1):

Do you wish to continue with CodeCommit? (Y/n): n
Do you want to set up SSH for your instances?
(Y/n): n
```

#### Run eb init with flags

> eb init --platform node.js --region us-east-2

The above command creates the `.elasticbeanstalk folder`

##### .ebextension

Create a folder `.ebextensions`
create a file `nodecommands.config`

put your start command there

```
option_settings:
    aws:elasticbeanstalk:container:nodejs:
        NodeCommand: "npm start"
```

#### Create the application environment (Deployment)

> eb create [environment-name]
> The <environment-name> is the name of your application, in this example I used nodetemplate hence the command is [eb create nodetemplate]

- with flags run: eb create --sample [your project folder name]

Note: avoid the use of `_` when naming your project folders

#### Deploy your application

> eb deploy

##### open your eb app

> eb open

#### more commands

eb logs
eb deploy
eb --help
eb setenv [VAR_NAME=VALUE] note: do not include the square brackets

#### Specify node version and engine

```javascript
"engines": {
    "npm": ">=8.0.0",
    "node": ">=16.0.0"
  }

```

##### Tp delete eb init project

> o to the directory of your project (the directory where you originally ran the "eb init" command). Delete the . elasticbeanstalk directory. You can now run "eb init" again, and it will prompt you for your configuration information.

###### Tutorial link

[deployment with node express](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_nodejs_express.html)

##### Code pipeline

> code pipeline enables you to do continuous development and continuous integration on your AWS resources.

Search codepipeline in your aws services and create a pipeline

---

###### fixing codepipeline errors

If the pipeline doesn't sync with your source code, Remove the ".ebextensions" directory and added a file called "Procfile" to my source directory.

Inside Procfile, try putting the following:

> web: npm start

##### Second fix for codepipeline errors

Just remove the Procfile and let elasticbeanstalk use the default npm start by default.
