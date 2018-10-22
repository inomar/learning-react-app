// @flow
export class Hello {
  name: string;
  constructor(name: string) {
    this.name = name;
    this.say();
  }

  say() {
    console.log(`Hello ${this.name} world!`);
  }
}

export default new Hello('inomar');
