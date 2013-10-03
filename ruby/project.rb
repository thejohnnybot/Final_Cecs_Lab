class Project
  attr_accessor :projects

  def initialize
    @projects = {}
    @projects["project1"] = "Description of project1"
    @projects["project2"] = "Description of project2"
  end

  def list
    @projects.each do |key, value|
      print "#{key}, #{value}\n"
    end
  end

  def find(project_key)
    @projects.each do |key, value|
      if project_key == key
        print "#{key}, #{value}\n"
      end
    end
  end

  def create(name, desc)
    @projects[name] = desc
  end

  def update(name, desc)
    @projects[name] = desc
  end

  def destroy(name)
    @projects.delete(name)
  end
end