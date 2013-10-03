#include <iostream>
#include <map>
#include <string>
#include "project.h"

using namespace std;

Project::Project() {
  this->projects_.insert(pair<string, string>("project1", "Description of project1"));
  this->projects_.insert(pair<string, string>("project2", "Description of project2"));
}

Project::~Project() {}

void Project::List() {
  for(multimap<string, string>::iterator it = this->projects_.begin(); it!=this->projects_.end(); ++it) {
    cout << it->first << " " << it->second << endl;
  }
}

void Project::Find(string name) {
  cout << this->projects_.find(name)->first << " " << this->projects_.find(name)->second << endl;
}

void Project::Create(string name, string desc) {
  double old_size = this->projects_.size();
  this->projects_.insert(pair<string, string>(name, desc));
  double new_size = this->projects_.size();
  if(new_size == (old_size + 1)) {
    cout << "Project was created." << endl;
  } else {
    cout << "There was an error." << endl;
  }
}

void Project::Update(string name, string desc) {
  this->projects_.erase(this->projects_.find(name));
  this->projects_.insert(pair<string, string>(name, desc));
}

void Project::Destroy(string name) {
  double old_size = this->projects_.size();
  this->projects_.erase(this->projects_.find(name));
  double new_size = this->projects_.size();
  if(new_size == (old_size - 1)) {
    cout << "Project was deleted." << endl;
  } else {
    cout << "There was an error." << endl;
  }
}