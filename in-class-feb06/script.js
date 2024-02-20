//Basic Javascript Notes

// console.log("Hello, World!");

// // Initializing variable
//     let name = "Taylor";
//     //const age = "20";
//     // or const age = 20; to use a number instead of a string
//     var computer = "macbook";

// //calling on variables to put into the console 
//     console.log(name);
//     //console.log(age);
//     console.log(computer);

// //bools and arrays
//     const isStudent = true;
//     //let hobbies = [false, "Programming", 20];

//     // you can give a specific vale or the entire array
//     //console.log(hobbies);
//     //console.log(hobbies[0]);

// //computations
//     let sum = 5 / 10;
//     console.log(sum);

// // If/else statements
//     const age = 12;

//     if (age >= 18) {
//         console.log("You're an adult!");
//     } else if (age >= 13) {
//         console.log("You're a teen!");
//     } else {
//         console.log("You're a child!")
//     }

// // for loops
//     const hobbies = ["hello", false, true, "goodbye", 20]

//     for (let i = 0; i < hobbies.length; i++) {
//         console.log(hobbies[i]);
//     }

// // Functions
//     function greetUser(name) {
//         console.log("Hello, " + name);
//     }
//     //calls the function passing in a parameter
//     greetUser("Taylor");


// //Javascript Demo

// document.getElementById("ptext").innerText = "Welcome to a great Javascript tutorial!";

// function whatToDo() {
//     alert("This button was clicked");
// }

// //do not add () at the end of the function because we only want the event listener to run it not to run automatically.
// document.getElementById("clickme").addEventListener("click", whatToDo);


//Button Demo

function whatToDo() {
    let userText = document.getElementById("myTextInput").value;
    if (userText) {
        let li = document.createElement("li");
        li.textContent = userText;
        document.getElementById("itemList").appendChild(li);
        document.getElementById("myTextInput").value = "";
    } else {
        alert("Please enter an item")
    }
}

document.getElementById("addItem").addEventListener("click", whatToDo)