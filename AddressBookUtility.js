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
    Update() {
        let name = readlineSync.question('Enter the First Name of the person to Update:');
        let index = addressBookArray.findIndex(x => x.firstName === name);
        if (index !== -1) {
            let select = readlineSync.question("To Edit Contacts Enter:\n a.FirstName\n b.LastName\n c.City\n d.State\n e.ZipCode\n f.PhoneNumber\n g.EMail - ");
            switch (select) {
                case 'a':
                    let first = readlineSync.question('Enter the First Name: ');
                    addressBookArray[index].firstName = first;
                    break;
                case 'b':
                    let last = readlineSync.question('Enter the Last Name: ');
                    addressBookArray[index].lastName = last;
                    break;
                case 'c':
                    let newCity = readlineSync.question('Enter the City: ');
                    addressBookArray[index].city = newCity;
                    break;
                case 'd':
                    let newState = readlineSync.question('Enter the State: ');
                    addressBookArray[index].state = newState;
                    break;
                case 'e':
                    let newZip = readlineSync.question('Enter the Zipcode: ');
                    addressBookArray[index].zip = newZip;
                    break;
                case 'f':
                    let newPh = readlineSync.question('Enter the PhoneNumber: ');
                    addressBookArray[index].phNo = newPh;
                    break;
                case 'g':
                    let newEmail = readlineSync.question('Enter the Email: ');
                    addressBookArray[index].email = newEmail;
                    break;
            }
            console.log("Contact Updated");
        } else {
            console.log('No Contact found with Name: ', name);
        }
    }
    Display() {
        addressBookArray.forEach(function (data) {
            console.log(" Name: " + data.firstName + " " + data.lastName + "\n EMAIL:  " + data.email + "\n PhoneNumber: " + data.phNo + "\n City: " + data.city + "\n State: " + data.state + "\n Zipcode: " + data.zip)
        });
    }
}

module.exports = new Utility();