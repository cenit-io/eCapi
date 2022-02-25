# Edge Connector
[![Build Status](https://travis-ci.com/cenit-io/eCapi.svg?branch=master)](https://travis-ci.com/cenit-io/eCapi)

## Links

- [Reference Documentation (ReDoc)](http://doc-api.omna.io)
- OpenAPI Raw Files: [JSON](https://doc-api.omna.io/api-spec/openapi.json) [YAML](https://doc-api.omna.io/api-spec/openapi.yaml)
- [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/eb5947e10923dee87507)

**Warning:** All above links are updated only after Travis CI finishes deployment

## Working on specification
### Install

1. Install [Node JS](https://nodejs.org/)
2. Clone repo and run `npm install` in the repo root

### Usage

#### Starts the development server for API Specification:

```bash
npm start
```

#### Starts the development server for Guides & Utilities:

```
  docsify serve docs
```

#### Build web_deploy folder with static assets:

```bash
npm run build
```

#### Validates the spec:

```bash
npm test
```

#### Deploys docs to GitHub Pages:

Deploys docs to GitHub Pages. You don't need to run it manually if you have Travis CI configured.

```bash
npm run gh-pages
```
