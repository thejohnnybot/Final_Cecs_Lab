require_relative 'project'

project = Project.new

puts "Welcome to Project Database"

def project_command
  puts
  puts "Please select a command"
  puts "1. List the projects"
  puts "2. Find a project"
  puts "3. Create a project"
  puts "4. Update a project"
  puts "5. Delete a project"
  puts "6. Close the program"
  $command = Integer(gets.chomp)
end

project_command

while $command != 6
  
  if $command == 1
    project.list
    project_command
  end

  if $command == 2
    print "Enter the project name: "
    name = gets.chomp!
    project.find(name)
    project_command
  end

  if $command == 3
    print "Enter the name and description: "
    name, desc = readline.split(', ')
    project.create(name, desc)
    puts "Project was created."
    project_command
  end

  if $command == 4
    print "Enter the name and description: "
    name, desc = readline.split(', ')
    project.update(name, desc)
    puts "Project was updated."
    project_command
  end

  if $command == 5
    print "Enter the name: "
    name = gets.chomp!
    project.destroy(name)
    project_command
  end

end

puts "Cloding the program."