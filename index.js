#!/usr/bin/env node

const path = require('path');
const { checkEngine, checkPlatform } = require('npm-install-checks');

const packageJson = require(path.join(process.cwd(), 'package.json'));
const regex = /^(?:(?:(?:pnpm|yarn)\/[0-9\.]+)\s)?(?:npm\/(?<npm>[0-9\.\?]+))\s(?:node\/v(?<node>[0-9\.]+))\s(.*)$/gm;
const versions = regex.exec(process.env.npm_config_user_agent);
const { npm, node } = versions.groups;

packageJson._id = packageJson.name;

checkEngine(packageJson, npm, node);

