const {
  context: {
    parameters: { name },
  },
} = yepcode;

const greeting = `Hello ${name}!`;

console.log(greeting);

return greeting;
