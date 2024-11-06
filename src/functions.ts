import { sayHelloProps } from "./types";

export function sayHello({ firstName, lastName, age }: sayHelloProps): void {
  console.log("Hello!");
  console.log(`Your name is ${firstName} ${lastName}`);

  if (age) {
    console.log(`You are ${age} years old`);
  }
}
