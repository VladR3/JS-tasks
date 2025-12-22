// Variables

let username = 'Vlad';
console.log(`My name is ${username}`);

let age = 22;
console.log(typeof(age));
console.log(typeof(String(age)));

let number = 10;
let result = number + '20';
console.log(result);
console.log(typeof(result));


// Functions

let a = 4;
let b = 5;
function Sum (a, b) {
    return a+b
}
console.log(Sum(a, b));

function upperCase ( str ) {
    return str.toUpperCase();
}

console.log(upperCase(username));

function squareArray(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] ** 2);
    }

    return result;
}

// This

class Hotel {

    constructor(name) {
        this.name = name;
        this.rooms = [];
        this.bookedRooms = [];
    }

    addRoom(number, type){
        this.rooms.push({number, type, isBooked:false})
    }

    bookRoom(number, guestName){
        let room = this.rooms.find(room => room.number === number);

        if (!room){
            console.log('Room not found');
            return false;
        }

        if (room.isBooked){
            console.log('This room is booked');
            return false;
        }

        room.isBooked = true;
        this.bookedRooms.push({
            number,
            type: room.type,
            guestName
        });
    }

    showBookedRooms() {
        this.bookedRooms.forEach(room => {
            console.log(
                `Room ${room.number} (${room.type}) booked by ${room.guestName}`
            );
        });
    }
}

const hotel = new Hotel('Hotel Ukraine');

hotel.addRoom(101, 'Single');
hotel.addRoom(102, 'Double');

const booking = hotel.bookRoom.bind(hotel);

booking(101, 'Vlad');
booking(102, 'Alina');

hotel.showBookedRooms();

// Objects

const book = {
    title: 'My first book',
    author: 'Vlad',
    year: 2025
};

book.genre = 'biography';

delete book.year;

console.log(book);


// Arrays

let arr = ["Mike", "John", "Sara"];

let index = arr.indexOf("John");
console.log(`Index of el "John": ${index}`);

arr.push("Vlad");
console.log(arr[arr.length - 1]);

let firstEl = arr.shift();
console.log(firstEl);
<<<<<<< Updated upstream
=======

// promises

function testPromise (){
    return new Promise((resolve, reject) => {
        let number = Math.floor(Math.random() * 10);

        if (number % 2 === 0){
            setTimeout(() => resolve("Promise resolved!"), 2000);
        }
        else {
            setTimeout(() => reject("Promise rejected!"), 2000);
        }

    })
}

let promise = testPromise();

promise
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    });


// Async Await

const sayHello = async () => {
    try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return "Hello, World!";
    } catch {
        throw new Error("Щось пішло не так");
    }
};

(async () => {
    try {
        const result = await sayHello();
        console.log(result);
    } catch (e) {
        console.error("Помилка:", e.message);
    }
})();

>>>>>>> Stashed changes
