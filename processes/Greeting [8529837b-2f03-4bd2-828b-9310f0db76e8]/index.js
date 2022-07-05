const {
  context: {
    parameters: { name },
  },
} = yepcode;

const greeting = `Hello ${name}! How are you?`;

console.log(greeting);

return greeting;
