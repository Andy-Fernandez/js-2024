class Contact {
  constructor (name, phone = "", email = ""){
    this.name = name;
    this.phone = phone;
    this.email = email;
  }
}

contacts = []

contacts.add = function(name, number = "", email = ""){
  if(!name){
    throw new Error("Name is require.");
  }

  let contact = new Contact(name, number, email);
  contacts.push(contact);
} // this work


contacts.delete = function(number){
  contacts[]
}

contacts.update = function(){

}

contacts.search = function() {

}

// ############### TEST ###############
contacts.add("Andys", 62541782, "andys@gmail.com");
contacts.add("Pablo", 62541783);
contacts.add("Ferna");
contacts.add("Andys", "","andys@gmail.com");

function showContacts(){
  contacts.forEach(element => {
    console.log(element);
  });
}
showContacts();