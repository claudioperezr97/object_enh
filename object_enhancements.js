//function createInstructor(firstName, lastName){
//    return {
//      firstName: firstName,
//      lastName: lastName
//   }
//  }

  function createInstructor(firstName ,LastName){
      return {
        firstName, 
        LastName
      }
  }

/*
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"
*/

var instructor = {
    firstName: "colt",
    [favoriteNumber]: "That is my favorite!"
}

/*
var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }
  */


var instructor = {
    firstName: "Colt",
    sayHi(){
        return "Hi"
    },
    sayBye(){
        return "Bye"
    }
}


function createAnimal(species, verb, noise){

    return {
        species,
        [verb](){
            console.log(noise)
        }
    }

}