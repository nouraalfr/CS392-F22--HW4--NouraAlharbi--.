const { mooncakeSays, catSays } = require('./');

test('mooncake knows what to say', () => {
  expect(mooncakeSays('woooahhh!')).toBe('(o.o) woooahhh!');
});

test('mooncake is not sure what to say', () => {
  expect(mooncakeSays()).toBe('(o.o) chookity?');
});


test('cat knows what to say', () => {
  expect(catSays('woooahhh!')).toBe('- . -? woooahhh!');
});

test('cat is not sure what to say', () => {
  expect(catSays()).toBe('- . -? meow?');
});