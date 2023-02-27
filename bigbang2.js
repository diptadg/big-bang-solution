// import the filesystem module
const fs = require("fs");

//declare the saveFile function to save our array output into a json file
function saveFile(bigbang) {
  file = JSON.stringify(bigbang); // convert the bigbang array into a json object
  fs.writeFile("output.json", file, "utf8", (error) => {
    if (error) {
      throw error;
    }
    console.log("file saved");
  });
}

//we declare the bigbang array
var bigbang = [];
// we declare the alias variable which would contain our dictionary and its corresponding keys
var alias = { 3: "BIG", 5: "BANG" };

for (let i = 1; i <= 100; i++) {
  output = ""; // we declare an empty string here to process our output

  // we declare a for loop that would iterate through our dictionary and check if our number is divisible by the key defined in our dictionary i.e. 3 or 5.
  // if it matches the condition it adds the value i.e. BIG or BANG or both to our string
  for (let k in alias) {
    if (i % k == 0) {
      output += alias[k];
    }
  }
  if (output == "") {
    output = parseInt(i); // if both conditionals are false, then we would just print the numbers
  }
  bigbang.push(output); // we push our output into our array
}
console.log(bigbang);
saveFile(bigbang); // we call the saveFile function to save our array output into the output.json file
