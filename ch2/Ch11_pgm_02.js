const doSomething = callback => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS'];
    callback(false, skills);
  }, 2000);
};

doSomething((err, result) => {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
});
