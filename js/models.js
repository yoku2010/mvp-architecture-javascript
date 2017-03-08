function PersonModel(_name, _age, _city){
    var id = (new Date()).getTime()
    var name = _name;
    var age = _age;
    var city = _city

    this.getId = function(){
        return id;
    }
    
    this.getName = function(){
        return name;
    }

    this.setName = function(value){
        name = value;
    }

    this.getAge = function(){
        return age;
    }
    this.setAge = function(value){
        age = value;
    }

    this.getCity = function(){
        return city;
    }

    this.setCity = function(value){
        city = value;
    }
}