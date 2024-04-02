# 0x01. ES6 Promises

In modern JavaScript, Promises play a pivotal role in handling asynchronous operations elegantly. They provide a more readable and manageable alternative to callbacks, allowing developers to write cleaner and more maintainable asynchronous code. This README will delve into various aspects of Promises, including non-techincal example.

## Promises: How, Why, and What

### What are Promises?

A Promise in JavaScript represents the eventual completion or failure of an asynchronous operation and its resulting value. It is a placeholder for the result of an asynchronous operation that hasn't completed yet.

### Why Promises?

Promises offer a structured way to deal with asynchronous operations, making code more readable, manageable, and less prone to callback hell (nested callbacks).

### How to Use Promises?

#### Creating a Promise:

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  if (/* operation succeeds */) {
    resolve(result);
  } else {
    reject(error);
  }
});
```

#### Using `then`, `catch` Methods:

```javascript
myPromise
  .then((result) => {
    // Handle successful result
  })
  .catch((error) => {
    // Handle error
  });
```

#### Using `Promise.resolve` and `Promise.reject`:

```javascript
Promise.resolve(value); // Creates a resolved Promise with the specified value.
Promise.reject(reason); // Creates a rejected Promise with the specified reason.
```

## Handling Errors with `catch` and `try/catch`

### Using `catch` Method:

```javascript
myPromise.catch((error) => {
  // Handle error
});
```

### Using `try/catch` with Promises:

```javascript
try {
  const result = await myPromise;
  // Handle successful result
} catch (error) {
  // Handle error
}
```

## The `every` Method of the Promise Object

### Using `Promise.all` and `Promise.allSettled`:

```javascript
const promises = [promise1, promise2, promise3];

Promise.all(promises)
  .then((results) => {
    // Handle all successful results
  })
  .catch((error) => {
    // Handle error
  });

Promise.allSettled(promises).then((results) => {
  // Handle all settled results (including both successful and failed promises)
});
```

## The `await` Operator and `async` Functions

### Using `await` Operator with Promises:

```javascript
async function myAsyncFunction() {
  try {
    const result = await myPromise;
    // Handle successful result
  } catch (error) {
    // Handle error
  }
}
```

### Using `async` Functions:

```javascript
async function myAsyncFunction() {
  try {
    const result = await someAsyncOperation();
    // Handle successful result
  } catch (error) {
    // Handle error
  }
}
```

## Non-technical example of promise:

Imagine you're a student waiting for a package delivery. You've ordered a new book online, but you're not sure exactly when it will arrive. Here's how the process resembles Promises:

1. **Placing the Order (Creating a Promise)**:
   You place an order for the book online and receive a confirmation that your order has been received. This confirmation is like creating a Promise in JavaScript. It represents the eventual delivery of your book.

2. **Waiting for Delivery (Using `then` Method)**:
   After placing the order, you go about your day, knowing that your book will arrive eventually. You don't sit by the door waiting for it; instead, you continue with other tasks. This waiting period is like using the `then` method with a Promise in JavaScript. You specify what should happen when the book arrives (e.g., you'll start reading it).

3. **Receiving the Package (Resolve)**:
   Finally, the delivery person arrives with your package. This moment corresponds to the Promise being resolved in JavaScript. The book has arrived, and you can now start reading it.

4. **Encountering a Problem (Reject and Catch)**:
   Sometimes, there might be issues with the delivery, such as bad weather causing delays. If the delivery is unsuccessful, you might receive a notification about the delay. This scenario is similar to the Promise being rejected in JavaScript. You handle this situation using the `catch` method, where you can decide what to do if there's an issue with the delivery (e.g., contact customer support).

So, in this analogy, the process of waiting for a package delivery mirrors the concept of Promises in JavaScript. It's all about handling asynchronous actions (like waiting for a delivery) in a structured and manageable way, ensuring that you're prepared for both successful outcomes and potential problems along the way.
