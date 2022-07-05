const {
  context: {
    parameters: { name },
  },
} = yepcode;

const greeting = `Hello ${name}! Nice to meet you??`;

console.log(greeting);

return greeting;
