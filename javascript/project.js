function Project() {
  this.projects = [];
  this.projects.push({name: "project1", desc: "Description of project1"});
  this.projects.push({name: "project2", desc: "Description of project2"});
}

Project.prototype.list = function() {
  for(i=0; i < this.projects.length; i++) {
    console.log(this.projects[i].name + " " + this.projects[i].desc);
  };
};

Project.prototype.find = function(name) {
  var name = name;
  for(i=0; i < this.projects.length; i++) {
    if(name == this.projects[i].name) {
      console.log(this.projects[i].name + " " + this.projects[i].desc);
    };
  };
};

Project.prototype.create = function(name, desc) {
  var name = name;
  var desc = desc;
  this.projects.push({name: name, desc: desc});
};

Project.prototype.update = function(name, desc) {
  var name = name;
  var desc = desc;
  for(i=0; i < this.projects.length; i++) {
    if(name == this.projects[i].name) {
      this.projects[i].name = name;
      this.projects[i].desc = desc;
    };
  };
};

Project.prototype.destroy = function(name) {
  var name = name;
  for(i=0; i < this.projects.length; i++) {
    if(name == this.projects[i].name) {
      this.projects.splice(i, 1);
    };
  };
};

module.exports = Project;