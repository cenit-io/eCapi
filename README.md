# OMNA API OpenAPI Specification
[![Build Status](https://travis-ci.com/cenit-io/eCapi.svg?branch=master)](https://travis-ci.com/cenit-io/eCapi)

## Introduction

The OMNA Commerce API is simple connector API to integrate ecommerce sale channels, such us 
marketplaces and ecommerce platforms.

An easy way to get orders, synchronize inventory and list product information to commerce solutions around the globe.

We are starting for marketplaces in Southeast Asia (Shopee, Lazada) but we will continue to make it global.

It is built on top of an integration platform https://cenit.io

This API is for individual retailers, SaaS services, or any business that needs to handle multiples commerce integrations.

## Steps to finish

1. Enable [Travis](https://docs.travis-ci.com/user/getting-started/#To-get-started-with-Travis-CI%3A) for your repository (**note**: you already have `.travis.yml` file)
1. [Create GitHub access token](https://help.github.com/articles/creating-an-access-token-for-command-line-use/); select `public_repo` on `Select scopes` section.
1. Use the token value as a value for [Travis environment variable](https://docs.travis-ci.com/user/environment-variables/#Defining-Variables-in-Repository-Settings) with the name `GH_TOKEN`
1. Make a test commit to trigger CI: `git commit --allow-empty -m "Test Travis CI" && git push`
1. Wait until Travis build is finished. You can check progress by clicking on the `Build Status` badge at the top
1. **[Optional]** You can setup [custom domain](https://help.github.com/articles/using-a-custom-domain-with-github-pages/) (just create `web/CNAME` file)
1. **[Optional]** If your API is public consider adding it into [APIs.guru](https://APIs.guru) directory using [this form](https://apis.guru/add-api/).
1. Delete this section ❌

## Links

- [Reference Documentation (ReDoc)](https://cenit-io.github.io/eCapi/)
- OpenAPI Raw Files: [JSON](https://cenit-io.github.io/eCapi/openapi.json) [YAML](https://cenit-io.github.io/eCapi/openapi.yaml)

**Warning:** All above links are updated only after Travis CI finishes deployment

## Working on specification
### Install

1. Install [Node JS](https://nodejs.org/)
2. Clone repo and run `npm install` in the repo root

### Usage

#### `npm start`
Starts the development server.

#### `npm run build`
Bundles the spec and prepares web_deploy folder with static assets.

#### `npm test`
Validates the spec.

#### `npm run gh-pages`
Deploys docs to GitHub Pages. You don't need to run it manually if you have Travis CI configured.
