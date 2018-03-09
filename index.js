const humanizeDuration = require("humanize-duration");
const ora = require("ora");

module.exports = (text, promiseCb) => {
  const start = new Date();
  const spinner = ora(text).start();
  return promiseCb()
    .then(res => {
      const end = new Date();
      spinner.succeed(`${text}: ${humanizeDuration(end - start)}`);
      return res;
    })
    .catch(e => {
      spinner.fail(e.toString());
      throw e;
    });
};

