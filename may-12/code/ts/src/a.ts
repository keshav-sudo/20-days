
// ---------------------------------------------
// TypeScript Full Notes with Code Examples
// Author: Keshav Sharma
// ---------------------------------------------

// -----------------------------
// 1. Basic Types
// -----------------------------

const numberValue: number = 10;
const userName: string = "Keshav";
const isActive: boolean = true;

console.log("Number:", numberValue);
console.log("User:", userName);
console.log("Is Active:", isActive);

// -----------------------------
// 2. Functions
// -----------------------------

// Function with a string parameter and no return value
function greet(firstname: string): void {
    console.log("Hello " + firstname);
}

greet("Keshav");

// Function with return type
function sum(a: number, b: number): number {
    return a + b;
}

const resultSum = sum(5, 10);
console.log("Sum result:", resultSum);

// Function running after 1 second
function runAfter1sec(fn: () => void): void {
    setTimeout(fn, 1000);
}

runAfter1sec(() => greet("Async Keshav"));

// -----------------------------
// 3. Object Types Inline
// -----------------------------

function isLegal(user: {
    firstname: string,
    lastname: string,
    age: number
}): boolean {
    return user.age > 18;
}

const person = {
    firstname: "Keshav",
    lastname: "Sharma",
    age: 18
};

console.log("Is legal age:", isLegal(person));

// Another function with same inline type
function sayHello(user: {
    firstname: string,
    lastname: string,
    age: number
}) {
    console.log("Hi there " + user.firstname);
}

sayHello(person);

// -----------------------------
// 4. Interfaces and Types
// -----------------------------

// Better structure using interface
interface Man {
    firstname: string;
    lastname: string;
    age: number;
}

function printManInfo(user: Man) {
    console.log("Age of user:", user.age);
}

printManInfo(person);

// Interface and type examples
type Woman = {
    firstname: string,
    lastname: string,
    age: number
}

interface WomanInterface {
    firstname: string,
    lastname: string,
    age: number
}

// -----------------------------
// 5. Union Types
// -----------------------------

// Variable or parameter that accepts multiple types
type Key = number | string;

function numberOrString(key: Key) {
    console.log("Key value:", key);
}

numberOrString(123);
numberOrString("abc");

// -----------------------------
// 6. Intersection Types
// -----------------------------

type Employee = {
    name: string;
    startdate: Date;
};

type Manager = {
    name: string;
    department: string;
};

// Intersection combines both types
type TeamLead = Employee & Manager;

const teamlead: TeamLead = {
    name: "Harkirat",
    startdate: new Date(),
    department: "Foreign Ministry"
};

console.log("Team Lead Info:", teamlead);

// -----------------------------
// 7. Arrays in TS
// -----------------------------

type NumberArray = number[];

function findMax(arr: NumberArray): number {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log("Max value:", findMax([5, 3, 7, 99, 100, 67]));

// -----------------------------
// 8. Callbacks in Functions
// -----------------------------

function doSomething(
    cb1: () => void,
    cb2: (str: string, num: number) => number
): string {
    const value = cb2("callback", 5);
    console.log("cb2 returned:", value);
    cb1();
    return "Done";
}

const returnVal = doSomething(
    () => console.log("Callback 1 executed"),
    (str, num) => {
        console.log(`Callback 2 with: ${str}, ${num}`);
        return num * 2;
    }
);

console.log("doSomething returned:", returnVal);

// -----------------------------
// 9. Try-Catch Block
// -----------------------------

try {
    throw new Error("Manual Error Thrown");
} catch (error) {
    console.error("Caught an error:", );
}

// -----------------------------
// 10. Interface Extension (Inheritance)
// -----------------------------

interface Client {
    class: number;
}

interface BigClient extends Client {
    address: string;
}

const myClient: BigClient = {
    class: 10,
    address: "Delhi"
};

console.log("Big client address:", myClient.address);

// -----------------------------
// 11. Enums in TypeScript
// -----------------------------

enum Direction {
    Left = "left",
    Right = "right",
    Up = "up",
    Down = "down"
}

function handleKeypress(dir: Direction) {
    console.log(dir + " key pressed");
}

handleKeypress(Direction.Down);

enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

console.log("Response Code Example:", ResponseStatus.Success);

// -----------------------------
// Advanced Generics with Type Guards
// -----------------------------

// Generic function that processes strings and numbers
function processMixedArray<T extends string | number>(arr: T[]): T[] {
    return arr.map((item) => {
        if (typeof item === "string") {
            return item.toUpperCase() as T; // Convert to uppercase
        } else if (typeof item === "number") {
            return (item * 2) as T; // Double the number
        }
        return item;
    });
}

// Mixed input array
const mixedArray = ["hello", 10, "world", 5];
const processedArray = processMixedArray(mixedArray);

console.log("Processed Mixed Array:", processedArray);
// Output: ["HELLO", 20, "WORLD", 10]

// -----------------------------
// Lowercase all strings in an array
// -----------------------------

// -----------------------------
// Lowercase all strings in an array (safely)
// -----------------------------

function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const el = getFirstElement(["harkiratSingh", "ramanSingh"]);
console.log(el.toLowerCase())


//pick use for pick type in intefaces or types

interface User {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}

const user: User = {
    id: "122",
    name: "keshav",
    age: 45,
    email: "keshav@example.com", // Updated email format
    password: "355055"
};

type UpdateProps = Pick<User, 'name' | 'email'>;

const displayUserProfile = (user: UpdateProps) => {
    console.log(`Name: ${user.name}, Email: ${user.email} `);
};

displayUserProfile(user); // This works since `user` includes 'name' and 'email'

//partial

function updateuser(UpdateProps: updatepropoptional){

}
type updatepropoptional = Partial<UpdateProps>

updateuser({
    name : "keshav",

})
//Readonly

type User1 = {
    name :  string;
    age : number;
}

const user2 : Readonly <User1> = {
    name : "kehsbv",
    age : 12
}


//Records and map
// type Usersss = {
//     name : string;
//     username : string
// }

// type Userss = {
//     [key: string]:Usersss
// } 

type Userss = Record<string , {name: string , age:number}>;


const userss: Userss = {
    "resdd@11" : {
        name : "keshav",
        age : 12
    },
     "resdd@1" : {
        name : "keshav",
        age : 12
    }
}

const usersss = new Map()

usersss.set("resdd@11" , {
        name : "keshav",
        age : 12
    })

    const userssss = usersss.get("resdd@11")

    //exclude




    type eventtype = 'click' | 'scroll' | 'mousemove';
    type excludeevent = Exclude<eventtype, 'scroll'>
    
    const handleevent = (event:excludeevent)=>{
        console.log(`Handling event: ${event}` )
    };

    handleevent('click');//ok
    // handleevent('scroll'); //error
