from project import *

print("Welcome to Project Database")

project = Project()

def project_command():
  print("1. List the projects.")
  print("2. Find a project.")
  print("3. Create a project.")
  print("4. Update a project.")
  print("5. Delete a project.")
  print("6. Close the program.")

  command = int(input())
  return command

command = project_command()

while command != 6:
  
  if command == 1:
    project.list()
    command = project_command()

  if command == 2:
    name = input("Enter a name: ")
    name.split()
    project.find(name)
    command = project_command()

  if command == 3:
    name = input("Enter a name: ")
    desc = input("Enter the description: ")
    name.strip()
    desc.strip()
    project.create(name, desc)
    command = project_command()

  if command == 4:
    name = input("Enter a project: ")
    desc = input("Enter the description: ")
    name.strip()
    desc.strip()
    project.update(name, desc)
    command = project_command()

  if command == 5:
    name = input("Enter the project: ")
    name.strip()
    project.destroy(name)
    command = project_command()

print("Closing the program.")