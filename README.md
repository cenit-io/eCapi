# OMNA Commerce API - OpenAPI Spec
[![Build Status](https://travis-ci.com/cenit-io/eCapi.svg?branch=master)](https://travis-ci.com/cenit-io/eCapi)

## Introduction

This repo has official reference of the OMNA Commerce API. The spec is OpenAPI 3.0.0 (aka swagger).

The **OMNA Commerce API** is simple connector API to integrate ecommerce sale channels, such us 
marketplaces and ecommerce platforms.

An easy way to get orders, synchronize inventory and list product information to commerce solutions around the globe.

We are starting for marketplaces in Southeast Asia (Shopee, Lazada) but we will continue to make it global.

It is built on top of an integration platform https://cenit.io

This API is for individual retailers, SaaS services, or any business that needs to handle multiples commerce integrations.

The next diagram shows the main operations available on OMNA Commerce API. Some of these operations generate and return asynchronous tasks, that you can track through task management services.

![OMNAv2 en](https://user-images.githubusercontent.com/4213488/64925350-c176a300-d7de-11e9-9a79-3fb0ccace204.png)

Supported Integrations:

* Shopify
* Shopee
* Lazada
* Qoo10
* MercadoLibre

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
