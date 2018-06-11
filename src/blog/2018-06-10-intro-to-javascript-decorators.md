---
title: "Introduction to Javascript Decorators"
date: "2018-06-10"
author: "Argi Avetisyan"  
---

A Decorator is simply a way of wrapping one piece of code with another. Decorators are currently not a built-in feature of Javascript. They are currently a stage 2 proposal which will be built-in in future Javascript releases. In Javascript, Decorators have become popular thanks to Typescript and Angular 2+. Javascript decorators can make your code clean and less verbose by decorating your code. These are also knows as "higher order functions" or "functional compositions". Let's take a look at an example:

```javascript
@log()
class MyClass {
  @doSomething()
  myFunction() {
    //
  }
}
```

In the above example, there are two decorators, `@log` and `@doSomething`. The first is decorates the `MyClass`, probably by logging some information about class.

At the moment, there is no support for Decorators in Javascript. If you are comfortable using Babel, you can use the <a target="_blank" href="https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy">transform-decorators-legacy</a> plugin.

*Decorators are nothing more than functions that return another function and pass the arguments of the object that they are decorating.* The only types of decorators that are currently supported are those on classes and members of classes.

Let's write a class Decorator that simply logs all the constructor parameters:

```javascript
function logParams(Class) {
  return (...args) => {
    console.log(args);
    return new Class(...args);
  }
}
```

We can use it like this:

```javascript
@loParams
class MyClass {
  constructor(arg1, arg2, arg3) {}
}

const myObj = new MyClass(1, 2, 3); // this will call our logParams()
```

Now let's write a Class member decorator that will make a property of a class readonly:

```javascript
function makeReadonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}
```
A complete example can be found <a target="_blank" href="https://www.sitepoint.com/javascript-decorators-what-they-are/">here</a>.  

### Where are Decorators used?

Decorators are used in Angular, MobX, and other frameworks and libraries. In MobX, decorators are used to mark properties as Observable, Computed, and classes as Observers.

We will be covering observers and related topics during our next 1-2 meetings so stay tuned and feel free to ask any questions you may have!  
