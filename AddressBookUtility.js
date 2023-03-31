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
            city:city,
            zip:zip,
        }
        addressBookArray.push(newContact);
    }

    Display(){
        console.log(addressBookArray);
    }
}
module.exports = new Utility();