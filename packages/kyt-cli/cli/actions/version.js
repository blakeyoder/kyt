const cliPkgJson = require('../../package.json');

const log = console.log; // eslint-disable-line no-console

module.exports = () => {
  log(cliPkgJson.version);
};
