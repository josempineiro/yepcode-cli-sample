const {
  context: {
    parameters: { name },
  },
} = yepcode;

const greeting = `Hello ${name}! Who are you?`;

console.log(greeting);

return greeting;
