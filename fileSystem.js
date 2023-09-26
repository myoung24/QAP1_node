var fs = require("fs").promises;

fs.readFile("./node.txt");

async function readFile(filePath) {
  // accepts argument of filepath
  try {
    const data = await fs.readFile(filePath);
    console.log(data.toString()); // displays file data as a string
  } catch (error) {
    console.error(`Error reading file: ${error.message}`); // shows an error in the console if file cannot be read
  }
}

readFile("node.txt");
