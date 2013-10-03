class Project(object):
  
  def __init__(self):
    self.projects = dict()
    self.projects["project1"] = "Description of project1"
    self.projects["project2"] = "Description of project2"

  def list(self):
    for key, value in sorted(self.projects.items()):
      print(key, value)

  def find(self, name):
    for key, value in self.projects.items():
      if key == name:
        print(key, value)

  def create(self, name, desc):
    self.projects[name] = desc

  def update(self, name, desc):
    self.projects[name] = desc

  def destroy(self, name):
    del self.projects[name]