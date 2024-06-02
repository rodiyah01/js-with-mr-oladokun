// 1.Using console.log() print out the following statement:
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// 2.Using console.log() print out the following quote by Mother Teresa:2
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

//3.check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof '10')

//4.Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
const value = parseFloat('9.8');
if (value !== 10){
    value = Math.round(value + 0.5); 
}
console.log(value); // Output: 10")

//5.Check if 'on' is found in both python and jargon
let python = "python"
let jargon = "jargon"
console.log(python.includes("on")); 
console.log(jargon.includes("on"));

//6.I hope this course is not full of jargon. Check if jargon is in the sentence
const sentence = "I hope this course is not full of jargon"
const searchTerm = "jargon";
if (sentence.includes(searchTerm)) {
    console.log("the word 'jargon' is not found in the sentence.");
}

//7.Generate a random number between 0 and 100 inclusively.
console.log("import random")
random_number = random.randint(0, 100);
print(random_number);

//8.Generate a random number between 50 and 100 inclusively.
console.log("import random")
random_number = random.randint(50, 100);
print(random_number);

//9.Generate a random number between 0 and 255 inclusively.
console.log("import random")
random_number = random.randint(0, 255)
print("Random number between 0 and 255:", random_number)

//10.Access the 'JavaScript' string characters using a random number.
console.log("import random")
s = 'JavaScript'
index = random.randint(0, len(s) - 1)
char = s[index]
print(char)

//11.Use console.log() and escape characters to print the following pattern.
// Define the number of rows for the pattern
const numRows = 5;

// Outer loop for rows
for (let i = 1; i <= numRows; i++) {
    let row = ''; // Initialize an empty string for each row

    // Inner loop for columns within the row
    for (let j = 1; j <= numRows + 1; j++) {
        // Calculate the value based on the row and column indices
        const value = i === 1 ? j : Math.pow(i, j - 1);

        // Append the value to the row string
        row += value + ' ';
    }

    // Print the row
    console.log(row);
}

