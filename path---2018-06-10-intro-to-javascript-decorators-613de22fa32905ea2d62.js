webpackJsonp([9385803465942],{338:function(e,a){e.exports={data:{markdownRemark:{html:'<p>A Decorator is simply a way of wrapping one piece of code with another. Decorators are currently not a built-in feature of Javascript. They are currently a stage 2 proposal which will be built-in in future Javascript releases. In Javascript, Decorators have become popular thanks to Typescript and Angular 2+. Javascript decorators can make your code clean and less verbose by decorating your code. These are also knows as "higher order functions" or "functional compositions". Let\'s take a look at an example:</p>\n<pre><code class="language-javascript">@log()\nclass MyClass {\n  @doSomething()\n  myFunction() {\n    //\n  }\n}\n</code></pre>\n<p>In the above example, there are two decorators, <code>@log</code> and <code>@doSomething</code>. The first is decorates the <code>MyClass</code>, probably by logging some information about class.</p>\n<p>At the moment, there is no support for Decorators in Javascript. If you are comfortable using Babel, you can use the <a target="_blank" href="https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy">transform-decorators-legacy</a> plugin.</p>\n<p><em>Decorators are nothing more than functions that return another function and pass the arguments of the object that they are decorating.</em> The only types of decorators that are currently supported are those on classes and members of classes.</p>\n<p>Let\'s write a class Decorator that simply logs all the constructor parameters:</p>\n<pre><code class="language-javascript">function logParams(Class) {\n  return (...args) => {\n    console.log(args);\n    return new Class(...args);\n  }\n}\n</code></pre>\n<p>We can use it like this:</p>\n<pre><code class="language-javascript">@loParams\nclass MyClass {\n  constructor(arg1, arg2, arg3) {}\n}\n\nconst myObj = new MyClass(1, 2, 3); // this will call our logParams()\n</code></pre>\n<p>Now let\'s write a Class member decorator that will make a property of a class readonly:</p>\n<pre><code class="language-javascript">function makeReadonly(target, name, descriptor) {\n  descriptor.writable = false;\n  return descriptor;\n}\n</code></pre>\n<p>A complete example can be found <a target="_blank" href="https://www.sitepoint.com/javascript-decorators-what-they-are/">here</a>.  </p>\n<h3>Where are Decorators used?</h3>\n<p>Decorators are used in Angular, MobX, and other frameworks and libraries. In MobX, decorators are used to mark properties as Observable, Computed, and classes as Observers.</p>\n<p>We will be covering observers and related topics during our next 1-2 meetings so stay tuned and feel free to ask any questions you may have!  </p>',frontmatter:{title:"Introduction to Javascript Decorators",author:"Argi Avetisyan",date:"10 June, 2018"}}},pathContext:{slug:"/2018-06-10-intro-to-javascript-decorators/"}}}});
//# sourceMappingURL=path---2018-06-10-intro-to-javascript-decorators-613de22fa32905ea2d62.js.map