# 0x03. ES6 Data Manipulation

## Using Map, Filter, and Reduce on Arrays

### 1. Map

The `map()` function applies a given function to each element of an array and returns a new array containing the results.

**Syntax:**

```javascript
const newArray = array.map(callback(currentValue, index, array), thisArg);
```

**Example:**

```javascript
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
```

### 2. Filter

The `filter()` function creates a new array with all elements that pass the test implemented by the provided function.

**Syntax:**

```javascript
const newArray = array.filter(callback(element, index, array), thisArg);
```

**Example:**

```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```

### 3. Reduce

The `reduce()` function applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

**Syntax:**

```javascript
const result = array.reduce(
  callback(accumulator, currentValue, index, array),
  initialValue
);
```

**Example:**

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15
```

## Typed Arrays

Typed Arrays provide a way to work with binary data in a structured manner. They are especially useful when dealing with WebGL or Web Audio APIs.

**Example:**

```javascript
const buffer = new ArrayBuffer(16); // Create a buffer with 16 bytes
const int32Array = new Int32Array(buffer); // Create a 32-bit integer array view
int32Array[0] = 42;
console.log(int32Array); // Output: Int32Array [42, 0, 0, 0]
```

## Set, Map, and WeakMap Data Structures

### Set

A Set is a collection of unique values.

**Example:**

```javascript
const set = new Set();
set.add(1);
set.add(2);
set.add(1); // Will not be added as it's a duplicate
console.log(set); // Output: Set {1, 2}
```

### Map

A Map is a collection of key-value pairs where keys can be of any type.

**Example:**

```javascript
const map = new Map();
map.set("name", "John");
map.set("age", 30);
console.log(map.get("name")); // Output: John
```

### WeakMap

A WeakMap is similar to a Map, but it allows only objects as keys and does not prevent garbage collection of its keys.

**Example:**

```javascript
let weakMap = new WeakMap();
let key = {}; // Object as key
weakMap.set(key, "value");
console.log(weakMap.get(key)); // Output: value
```
