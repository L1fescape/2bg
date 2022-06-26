# 2bg.gg

> cloudflare worker and webapp for [2bg.gg](https://2bg.gg)

[![Deploy](https://github.com/L1fescape/2bg/actions/workflows/deploy.yml/badge.svg)](https://github.com/L1fescape/2bg/actions/workflows/deploy.yml)

## install

install node 14 and npm then run

```
$ npm i -g @cloudflare/wrangler
$ npm i -g @vue/cli
$ cd api && npm install
$ cd app && npm install
```

## dev

```
$ cd api && npm start
$ cd app && npm start
```

## build

```
$ cd api && npm run build
$ cd app && npm run build
```

## test

```
$ cd api && npm run test
$ cd app && npm run test
```

## deploy

the webapp in `app` is deployed automatically via cloudflare pages
the api in `api` is deployed automatically via cloudflare workers

## devcontainer