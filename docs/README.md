# OMNA Commerce API

## Quick Start

1- It is recommended to install docsify-cli globally, which helps initializing and previewing the website locally.

```
 npm i docsify-cli -g
```

2- Preview your site
Run the local server with docsify serve. You can preview your site in your browser on http://localhost:3000.

```
  cd docs

  docsify serve docs
```

## Deploy

This site is deploy in [ZEIT](https://vercel.com). The steps here could be two ways:

- Can link a Github repo with you Zeit account. Import repo. Easy one and each time that repo update will be automatic deploy. More info here [ZEIT import repo](https://vercel.com/import)

- The other could be from the local folder:
  - Install Now CLI, 
  ```
   npm i -g now
  ```
 - Change directory to your docsify website, for example 
  ```
    cd docs
  ```
 - Deploy with a single command, 
 
 ```
  vercel --prod
 ```
