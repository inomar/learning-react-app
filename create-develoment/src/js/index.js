export class Hello {
  constructor(name) {
    this.name = name;
    this.say();
  }

  say() {
    console.log(`Hello ${this.name} world!`);
  }
}

export default new Hello('inomar');
