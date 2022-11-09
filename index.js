function mooncakeSays(message) {
  let mooncake = '(o.o)';

  if (!message) {
    return `${mooncake} chookity?`;
  }

  return `${mooncake} ${message}`;
}

function catSays(message) {
  let mooncake = '- . -?';

  if (!message) {

    return `${mooncake} meow?`;


  return `${mooncake} ${message}`;
}


module.exports.catSays = catSays;
module.exports.mooncakeSays = mooncakeSays;