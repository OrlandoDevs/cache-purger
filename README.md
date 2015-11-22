# O-Devs CloudFlare cache purger

This project is run on AWS Lambda and is executed every time a pull request is merged on the [Orlando Devs blog repo](https://github.com/OrlandoDevs/orlandodevs.github.io).

## Configuring

Before running this project you know need to create a `config.json` file within the root. Feel free to copy and paste the `sample.config.json` before proceeding. Every field within `config.json` you will need to fill out.

Below is an example of what your `config.json` file should look like:

```js
// File location: `/config.js`
{
  "cloudflare": {
    "key": "cloudflare-key",
    "email": "cloudflare-email",
    "zone": "cloudflare-zone",
    "endpoint": "cloudflare-endpoint"
  }
}
```

## Deploying

Before deploying this project you will need to:

1. Clone this project
2. Run `npm install`
3. Zip project and upload to AWS Lambda

Be sure to take the following steps when zipping and uploading the project to AWS Lambda:

- Include every file within this project in the zip file, including the `node_modules` directory
- Be sure to have `app.js`, `node_modules`, etc in the **root** of your zip files. DO NOT ZIP the parent directory, as this will make things fail on Amazon (trust me I learned this the hard way).
