// מגישים: מאי גלילי ואביאל מלכה כיתה 49.1
//import all the moudle
const fs = require("fs");
const path = require("path");

//take the path of the text
const ditPath = path.join(__dirname, "/text"); // take the path all way to folder
let str = "";
//run all the file and one by one and print
for (let i = 1; i <= 10; i++) {
  //take Each text.txt
  const textIn = fs.readFileSync(ditPath + "/text" + i + ".txt", "utf-8");
  const arr = textIn.split("\n");

  //cheack and add the String
  for (let j = 0; j < i; j++) {
    if (i < arr.length) {
      str += arr[j];
      str += "\n";
    }

    if (i - 1 > j && arr.length <= i) {
      str += arr[j];
      str += "\n";
    }
  }
  // add how the string to new text.txt
  fs.writeFileSync(ditPath + "/textRead.txt", str);
}
