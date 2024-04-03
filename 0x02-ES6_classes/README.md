## 0x02. ES6 Classes

Welcome to the guide on ES6 classes! In this README file, we'll cover the following topics:

1. [Defining a Class](#defining-a-class)
2. [Adding Methods to a Class](#adding-methods-to-a-class)
3. [Static Methods in a Class](#static-methods-in-a-class)
4. [Extending a Class](#extending-a-class)
5. [Metaprogramming and Symbols](#metaprogramming-and-symbols)

### Defining a Class

In ES6, class syntax provides a more straightforward and familiar way to create objects and deal with inheritance. Here's a basic syntax for defining a class:

```javascript
class MyClass {
  constructor(property1, property2) {
    this.property1 = property1;
    this.property2 = property2;
  }
}
```

### Adding Methods to a Class

Methods can be added to a class by simply defining them within the class block:

```javascript
class MyClass {
  constructor(property1, property2) {
    this.property1 = property1;
    this.property2 = property2;
  }

  myMethod() {
    // method logic here
  }
}
```

### Static Methods in a Class

Static methods belong to the class itself rather than instances of the class. They can be called directly on the class without creating an instance. Here's how you define a static method:

```javascript
class MyClass {
  constructor(property1, property2) {
    this.property1 = property1;
    this.property2 = property2;
  }

  static myStaticMethod() {
    // static method logic here
  }
}
```

### Extending a Class

Inheritance in ES6 classes is achieved using the `extends` keyword. This allows a subclass to inherit properties and methods from a superclass:

```javascript
class ParentClass {
  // parent class properties and methods
}

class ChildClass extends ParentClass {
  // child class properties and methods
}
```

### Metaprogramming and Symbols

Metaprogramming involves writing code that operates on other code, typically by modifying or generating it. Symbols are unique identifiers introduced in ES6 that can be used as keys for object properties.

Metaprogramming with symbols can involve dynamically adding methods or properties to classes at runtime, enabling powerful runtime modifications.

```javascript
const mySymbol = Symbol("description");

class MyClass {
  [mySymbol]() {
    // method logic here
  }
}
```

Symbols provide a way to create unique keys for object properties, preventing unintentional conflicts with other properties.

Happy coding! 🚀
