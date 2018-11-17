/**
 * Simple Program to illustrate how Events and Event Emitters work in Node
 * Culled from Anthony Alicea's Learn and Understand Node Js
 * https://www.udemy.com/understand-nodejs/
 * Original Program was written with Function Constructors
 * I decided to rewrite it using modern ES6 class syntax
 */

class Emitter {
  constructor() {
    this.events = {};
  }

  on(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
  }

  emit(type) {
    if (this.events[type]) {
      const events = this.events[type];
      events.forEach(listener => {
        listener();
      });
    }
  }
}

module.exports = Emitter;
