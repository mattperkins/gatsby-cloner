## INSTALL
### yarn

## RUN
### gatsby develop -p 3001

## DEPLOY
### gatsby build

```
When using sub domains: e.g mydomain.com/sub-directory

gatsby-config.js
module.exports = {
  // Note: it must *not* have a trailing slash.
  pathPrefix: `/blog`,
}

command line
-> gatsby build --prefix-paths
```

```
now.json
{
  "version": 2,
  "name": "my-gatsby-project",
  "builds": [
    {
      "src": "package.json",
      "use": "@now/static-build",
      "config": { "distDir": "public" }
    }
  ]
}

package.json
{
  "scripts": {
    ...
    "now-build": "npm run build"
  }
}

command line
-> now
```

```
Github CI on Netlify:
https://www.gatsbyjs.org/docs/hosting-on-netlify
```

```
Offical Docs:
https://www.gatsbyjs.org/docs/
```