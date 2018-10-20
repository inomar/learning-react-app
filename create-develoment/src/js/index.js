export class Hello {
  constructor(name) {
    this.say(name);
  }

  say(name) {
    console.log(`Hello ${name} world!`)
  }
}

export default new Hello('inomar');
