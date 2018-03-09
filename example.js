const spinner = require("./index");

// some promise
const randomWait = () =>
  new Promise((resolve, reject) => {
    const rnd = Math.random() * 2000;
    if (rnd < 500) {
      // fail sometime
      setTimeout(() => reject("Error: timeout"), 1000);
    } else {
      setTimeout(resolve, rnd);
    }
  });

const randomSpin = text => () => spinner(text, randomWait);

Promise.resolve()
  .then(randomSpin("uploading video..."))
  .then(randomSpin("decoding data..."))
  .then(randomSpin("analysing frames..."))
  .then(randomSpin("detecting faces..."))
  .then(randomSpin("generating JSON..."))
  .catch(console.log);
