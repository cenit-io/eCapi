# CenitIO eCommerce API - OpenAPI Spec
[![Build Status](https://travis-ci.com/cenit-io/eCapi.svg?branch=master)](https://travis-ci.com/cenit-io/eCapi)

## Introduction

This repo has official reference of the CenitIO eCommerce API. The spec is OpenAPI 3.0.0 (aka swagger).

The **CenitIO eCommerce API** is simple connector API to integrate eCommerce sale channels, such as 
marketplaces and ecommerce platforms.

An easy way to consolidate orders, synchronize inventory and listing product information to commerce solutions.

The list of available integrations include: Amazon Marketplace, Mercado Libre, Lazada, Qoo10, Shopee, Shopify, Backmarket.

These integrations are related with 34 Countries: Argentina, Australia, Bolivia, Brasil, Canada, Chile, Colombia, Costa Rica, Dominicana, Ecuador, France, Germany, Guatemala, Honduras, India, Indonesia, Indonesia, Japan, Malaysia, Mexico, Nicaragua, Panama, Paraguay, Peru, Philippines, Salvador, Singapore, Spain, Thailand, Turkey, United Kingdom, Unit Arab Emirates, Uruguay, United States, Venezuela, Vietnam.

It is built on top of an integration platform https://cenit.io

This API is for individual retailers, SaaS services, or any business that needs to handle multiples commerce integrations.

The next diagram shows the main operations available on CenitIO eCommerce API. Some of these operations generate and return asynchronous tasks, that you can track through task management services.

![OMNAv2 en](https://user-images.githubusercontent.com/4213488/64925350-c176a300-d7de-11e9-9a79-3fb0ccace204.png)

Supported Integrations:

* Shopify
* Shopee
* Lazada
* Qoo10
* MercadoLibre

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