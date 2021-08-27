<div style="text-align: center" align="center">
  <img alt="Open Sauced" src="https://i.ibb.co/7jPXt0Z/logo1-92f1a87f.png" width="300px" />

# @open-sauced/check-engines

> Never break your dependency tree with [**npm-install-checks**](https://www.npmjs.com/package/npm-install-checks) running on [**npx**](https://www.npmjs.com/package/npx).

[![Commits](https://img.shields.io/github/commit-activity/w/open-sauced/check-engines?style=flat)](https://github.com/open-sauced/check-engines/pulse)
[![Issues](https://img.shields.io/github/issues/open-sauced/check-engines.svg?style=flat)](https://github.com/open-sauced/check-engines/issues)
[![Releases](https://img.shields.io/github/v/release/open-sauced/check-engines.svg?style=flat)](https://github.com/open-sauced/check-engines/releases)
[![Discord](https://img.shields.io/discord/714698561081704529.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://discord.gg/U2peSNf23P)
[![Twitter](https://img.shields.io/twitter/follow/saucedopen?label=Follow&style=social)](https://twitter.com/saucedopen)

</div>

## 📦 Install

This package is binary and doesn't require installation however you can add it to your repository as a `devDependency`:

```shell
npm install --save-dev @open-sauced/check-engines
```

## 🚀 Usage

All you have to do is run the script next to your `package.json`:

```shell
npx @open-sauced/check-engines
```

## 🔧 Configuration

The most common use case for this package is to let it run on `install` and `start` generic `npm` scripts:

```json
{
  "scripts": {
    "preinstall": "npx @open-sauced/check-engines",
    "prestart": "npx @open-sauced/check-engines"
  }
}
```

Or with less copy paste:

```json
{
  "scripts": {
    "engines": "npx @open-sauced/check-engines",
    "preinstall": "npm run engines",
    "prestart": "npm run engines"
  }
}
```

## 🤝 Contributing

We encourage you to contribute to Open Sauced! Please check out the [Contributing guide](https://docs.opensauced.pizza/) for guidelines about how to proceed.

If you decide to fix a bug, make sure to use the conventional commit available at:

```shell
npm run push
```

<img align="right" src="https://i.ibb.co/CJfW18H/ship.gif" width="200"/>

## 🍕 Community

Got Questions? Join the conversation in our [Discord](https://discord.gg/U2peSNf23P).  
Find Open Sauced videos and release overviews on our [YouTube Channel](https://www.youtube.com/channel/UCklWxKrTti61ZCROE1e5-MQ).

## ⚖️ LICENSE

MIT © [Open Sauced](LICENSE)
