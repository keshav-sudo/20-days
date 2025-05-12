
---

# 📘 TypeScript Mastery Guide

## 1. 📌 Basic Types

TypeScript offers a variety of basic types to enhance code clarity and safety.

```ts
let id: number = 101;
let username: string = "Keshav";
let isActive: boolean = true;
```

* **number**: Represents both integers and floating-point numbers.
* **string**: Represents text data.
* **boolean**: Represents logical values: `true` or `false`.

## 2. 🧩 Functions with Type Annotations

Defining function parameters and return types ensures type safety.

```ts
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

greet("Keshav");
```

* **Parameters**: Typed to ensure correct usage.
* **Return Type**: `void` indicates no return value.

## 3. 🧠 Arrow Functions and Callbacks

Arrow functions provide a concise syntax, especially useful for callbacks.

```ts
const runAfter1Sec = (fn: () => void): void => {
  setTimeout(fn, 1000);
};

runAfter1Sec(() => greet("Delayed Hello"));
```

* **`() => void`**: Function type with no parameters and no return value.

## 4. ➕ Functions with Return Types

Specifying return types enhances code predictability.

```ts
function sum(a: number, b: number): number {
  return a + b;
}

const total = sum(5, 10);
console.log(total); // Output: 15
```

## 5. 🧾 Inline Object Types

Defining object shapes directly in function parameters.

```ts
function isLegal(user: { age: number }): boolean {
  return user.age >= 18;
}

console.log(isLegal({ age: 20 })); // Output: true
```

## 6. 🧱 Interfaces

Interfaces define the structure of objects, promoting reusability.

```ts
interface Person {
  firstname: string;
  lastname: string;
  age: number;
}

const person: Person = {
  firstname: "Keshav",
  lastname: "Sharma",
  age: 25,
};
```

* Interfaces can be extended:

```ts
interface Employee extends Person {
  employeeId: number;
}
```

## 7. 🔖 Type Aliases

Type aliases create new names for existing types.

```ts
type User = {
  firstname: string;
  lastname: string;
  age: number;
};

const user: User = {
  firstname: "Keshav",
  lastname: "Sharma",
  age: 25,
};
```

* Useful for unions and intersections.

## 8. 🔀 Union Types

Variables can hold multiple types.

```ts
type ID = number | string;

let userId: ID = 101;
userId = "A101";
```

## 9. 🔗 Intersection Types

Combine multiple types into one.

```ts
type Employee = {
  name: string;
  startDate: Date;
};

type Manager = {
  department: string;
};

type TeamLead = Employee & Manager;

const lead: TeamLead = {
  name: "Harkirat",
  startDate: new Date(),
  department: "Foreign Ministry",
};
```

## 10. 📚 Arrays in TypeScript

Defining arrays with specific types.

```ts
type NumberArray = number[];

function maxValue(arr: NumberArray): number {
  return Math.max(...arr);
}

console.log(maxValue([1, 2, 3, 4, 698])); // Output: 698
```

## 11. 🔁 Callbacks with Multiple Parameters

Functions can accept other functions as parameters.

```ts
function doSomething(
  cb1: () => void,
  cb2: (str: string, num: number) => number
): string {
  const result = cb2("2", 2);
  console.log("cb2 returned:", result);
  cb1();
  return "1";
}

const result = doSomething(
  () => console.log("Callback 1 called"),
  (str, num) => {
    console.log(`Callback 2 called with str = ${str}, num = ${num}`);
    return num + 10;
  }
);

console.log("Function returned:", result);
```

## 12. 🛠️ Error Handling with Try/Catch

Handling exceptions gracefully.

```ts
try {
  throw new Error("An error occurred");
} catch (error) {
  console.error("Caught error:", error);
}
```

## 13. 🧬 Extending Interfaces

Creating complex types by extending existing ones.

```ts
interface Manager {
  name: string;
}

interface Client {
  class: number;
}

interface BigClient extends Client {
  address: string;
}
```

## 14. 🎛️ Enums

Enums define a set of named constants.

```ts
enum Direction {
  Left = "left",
  Right = "right",
  Up = "up",
  Down = "down",
}

function doSomething(keyPressed: Direction) {
  console.log(`${keyPressed} is pressed`);
}

doSomething(Direction.Down); // Output: down is pressed
```

## 15. 🧪 Generics

Generics create reusable components that work with various types.

### Basic Generic Function

```ts
function identity<T>(arg: T): T {
  return arg;
}

let strOut = identity<string>("Generic String");
let numOut = identity<number>(42);

console.log(strOut, numOut); // Output: Generic String 42
```

### Generic with Array Type

```ts
function firstElement<T>(arr: T[]): T {
  return arr[0];
}

const el = firstElement(["apple", "banana"]);
console.log("First Element:", el); // Output: apple
```

### Reverse Array with Generics

```ts
function reverseArray<T>(items: T[]): T[] {
  return items.slice().reverse();
}

const reversed = reverseArray([1, 2, 3, 4, 5]);
console.log("Reversed array:", reversed); // Output: [5, 4, 3, 2, 1]
```

## 16. 🧠 Advanced Generics with Type Guards

### Processing Mixed Arrays

```ts
function processMixedArray<T extends string | number>(arr: T[]): T[] {
  return arr.map((item) => {
    if (typeof item === "string") {
      return item.toUpperCase() as T;
    } else if (typeof item === "number") {
      return (item * 2) as T;
    }
    return item;
  });
}

const mixedArray = ["hello", 10, "world", 5];
const processedArray = processMixedArray(mixedArray);

console.log("Processed Mixed Array:", processedArray);
// Output: ["HELLO", 20, "WORLD", 10]
```

### Lowercasing Strings in an Array

```ts
function lowerCaseStrings(arr: string[]): string[] {
  return arr.map((item) => item.toLowerCase());
}

const strArray = ["HELLO", "WORLD", "TS"];
const lowered = lowerCaseStrings(strArray);

console.log("Lowercased Strings:", lowered); // Output: ["hello", "world", "ts"]
```

### Filtering Numbers from a Mixed Array

```ts
function filterNumbers<T>(arr: T[]): number[] {
  return arr.filter((item): item is number => typeof item === "number");
}

const mix: (string | number)[] = [1, "two", 3, "four", 5];
const onlyNumbers = filterNumbers(mix);

console.log("Filtered Numbers:", onlyNumbers); // Output: [1, 3, 5]
```

---
