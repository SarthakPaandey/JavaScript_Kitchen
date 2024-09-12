    var dog = {
      breed: "Labradodr",
      proto: {
        bark: function() {
          console.log("Woof!");
        }
      }
    };
    
    function beget(proto) {
      function F() {}
      F.prototype = proto;
      return new F();
    }
    
    var myDog = beget(dog.proto);
    myDog.bark(); // Output: Woof!
