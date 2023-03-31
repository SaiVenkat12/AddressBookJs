var readlineSync = require('readline-sync');
let addressBookArray = new Array();
class Utility {

    AddContacts() {
        let firstName = readlineSync.question('Enter the First Name: ');
        let lastName = readlineSync.question('Enter the Last Name: ');
        let email = readlineSync.question('Enter the Email: ');
        let phNo = readlineSync.question('Enter the Phone Number: ');
        let state = readlineSync.question('Enter the state: ');
        let city = readlineSync.question('Enter the city: ');
        let zip = readlineSync.question('Enter the ZipCode: ');

        let newContact = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phNo: phNo,
            state: state,
            city: city,
            zip: zip,
        }
        addressBookArray.push(newContact);
        console.log("Contact Added!");
    }
    DeleteContact() {
        let name = readlineSync.question('Enter the First Name of the person to delete:');
        let index = addressBookArray.findIndex(x => x.firstName === name);
        if (index !== -1) {
            addressBookArray.splice(index, 1);
            console.log('Contact Deleted!');
        } else {
            console.log('No Contact found with Name: ', name);
        }
    }
    Display() {
        addressBookArray.forEach(function(data){
        console.log("Name: " + data.firstName + " " + data.lastName + "\n EMAIL:  " + data.email + "\n PhoneNumber: " + data.phNo + "\n City: " + data.city + "\n State: " + data.state + " Zipcode: " + data.zip)
        });
    }
}

module.exports = new Utility();