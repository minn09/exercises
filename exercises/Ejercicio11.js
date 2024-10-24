const allArgs = (...args) => {
  let obj = {};
  args.forEach((arg, index) => {
    obj[index] = arg;
  });
  return obj;
};

console.log(allArgs(1, 2, 3));
