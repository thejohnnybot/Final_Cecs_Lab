var Project = require('./project.js');
var projects_api = new Project();

console.log("Welcome to the Projects Database");

function project_text() {
  console.log("");
  console.log("1. List all Projects.");
  console.log("2. Find a Project.");
  console.log("3. Create a Project.");
  console.log("4. Update a Project");
  console.log("5. Delete a Project.");
  console.log("6. Close the Program");
  console.log("");
}

project_text();

var stdin = process.stdin;
var stdout = process.stdout;

stdin.setEncoding('utf-8');

stdin.on('data', function(command) {
  if(command == 1) {
    projects_api.list();
    project_text();
  };
  if(command == 2) {
    stdout.write("Enter the name: ");
    stdin.once('data', function(chunk) {
      var name = chunk.trim();
      projects_api.find(name);
      project_text();
    });
  };
  if(command == 3) {
    stdout.write("Enter the name and desc with ,: ");
    stdin.once('data', function(chunk) {
      var chunk = chunk.split(', ');
      var name = chunk[0].trim();
      var desc = chunk[1].trim();
      projects_api.create(name, desc);
      project_text();
    });
  };
  if(command == 4) {
    stdout.write("Enter the name and desc with ,: ");
    stdin.once('data', function(chunk) {
      var chunk = chunk.split(', ');
      var name = chunk[0].trim();
      var desc = chunk[1].trim();
      projects_api.update(name, desc);
      project_text();
    });
  };
  if(command == 5) {
    stdout.write("Enter the name of the project: ");
    stdin.once('data', function(chunk) {
      var name = chunk.trim();
      projects_api.destroy(name);
      project_text();
    });
  };
  if(command == 6) {
    console.log("Closing the program.");
    process.exit();
  };
});