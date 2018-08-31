## Overview

This is a simple example of script trying to fetch data from S3 using async await for syncronous response.

### Setup your environment

Create .env vars:
* Copy the `.env.example` file example and put yout aws and s3 config vars
```
cp .env.example .env
```

Package manager:
* [Install **npm**](https://www.npmjs.com/get-npm) and [Install **Yarn**](https://yarnpkg.com/en/docs/install#debian-stable)(Optional)

Install Docker (Optional):
* [Install **Docker**](https://docs.docker.com/install/#supported-platforms)
* [Install **Docker compose**](https://docs.docker.com/compose/install/)

AWS Config:
* [`aws configure`](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)

ASK Sdk:
* [`ask init --no-browser`](https://developer.amazon.com/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html)


### Build project without docker

```
# Generate bundle using webpack development mode
yarn build:dev

# Generate and watch bundle using webpack  development mode
yarn build:dev:watch

# Generate bundle using webpack production mode
yarn build:prod

# Generate bundle using webpack production mode
yarn build:prod:watch
```

##### **Warning:** Problems with `node_modules` packages?

Try cleaning the `node_modules` if you have tried to install the packages without docker, and you have tried to use them later.
```
yarn build:clean
```


### Build project with **DOCKER** (The easy way)

##### Build bundle locally

```
# Go to docker local folder
cd docker/local

# Run docker webpack service
# Params between {} are optional
bash docker.sh up {YARN_COMMAND}
```

##### Build bundle and deploy for production

```
# Go to docker local folder
cd docker/production

# Aws and ask sdk configuration setup
bash docker.sh configure

# Run docker webpack service
# Params between {} are optional
bash docker.sh up {YARN_COMMAND}
```


### Acknowledgements

This code is compiled using:
- Webpack 4
- Docker 18+
- AWS Cli



### Alexa skill references

- Display inteface reference: https://developer.amazon.com/es/docs/custom-skills/display-interface-reference.html
- Display template reference: https://developer.amazon.com/docs/custom-skills/display-template-reference.html
- Audio Player: https://developer.amazon.com/zh/docs/custom-skills/audioplayer-interface-reference.html
- Alexa Standar Build-Intents: https://developer.amazon.com/docs/custom-skills/standard-built-in-intents.html