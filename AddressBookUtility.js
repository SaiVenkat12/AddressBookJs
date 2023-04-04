var readlineSync = require('readline-sync');
const fs = require('fs');
let addressBookArray = new Array();

const nameValidation=RegExp("^[A-Z]{1}[a-z]{2,}$");
const phValidation=RegExp("^[0-9]{2}[6-9]{1}[0-9]{9}$");
const emailValidation=RegExp("^[a-zA-Z0-9]([.+-_]?[a-zA-z0-9])*@[0-9a-zA-Z]+.[a-zA-Z]{2,}([.]{0,1}[A-Za-z]{2,})$");
const zipValidation=RegExp("^[0-9]{6}$");

class Utility {
    AddContacts() {
        
        let firstName = readlineSync.question('Enter the First Name: ');
        let flag=true;
        while(flag){
            if(!nameValidation.test(firstName)){
                console.log("---Name is Invalid!!!---");
                firstName = readlineSync.question('Enter the Last Name: ');
            }
            else{
                flag=false;
            }
        }

        let lastName = readlineSync.question('Enter the Last Name: ');
        flag=true;
        while(flag){
            if(!nameValidation.test(lastName)){
                console.log("---Name is Invalid!!!---");
                lastName = readlineSync.question('Enter the Last Name: ');
            }
            else{
                flag=false;
            }
        }

        let email = readlineSync.question('Enter the Email: ');
        flag=true;
        while(flag){
            if(!emailValidation.test(email)){
                console.log("---email is Invalid!!!---");
                email = readlineSync.question('Enter the Email: ');
            }
            else{
                flag=false;
            }
        }

        let phNo = readlineSync.question('Enter the Phone Number: ');
        flag=true;
        while(flag){
            if(!phValidation.test(phNo)){
                console.log("---Phone Number is Invalid!!!---");
                phNo = readlineSync.question('Enter the Phone Number:  ');
            }
            else{
                flag=false;
            }
        }

        let state = readlineSync.question('Enter the state: ');
        let city = readlineSync.question('Enter the city: ');
        let zip = readlineSync.question('Enter the ZipCode: ');
        flag=true;
        while(flag){
            if(!zipValidation.test(zip)){
                console.log("---Zip Code is Invalid!!!---");
                zip = readlineSync.question('Enter the ZipCode: ');
            }
            else{
                flag=false;
            }
        }

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
        let json = JSON.stringify(addressBookArray);
        fs.writeFileSync('addressBookFile.json',json);
        console.log("Contact Added!");
    }
    
    DeleteContact() {
        let name = readlineSync.question('Enter the First Name of the person to delete:');
        let index = addressBookArray.findIndex(x => x.firstName === name);
        if (index !== -1) {
            addressBookArray.splice(index, 1);
            console.log('Contact Deleted!');
            let json = JSON.stringify(addressBookArray);
            fs.writeFileSync('addressBookFile.json',json);
        } else {
            console.log('No Contact found with Name: ', name);
        }
    }
    FindContact() {
        let name = readlineSync.question('Enter the First Name of the person to Find: ');
        let index = addressBookArray.findIndex(x => x.firstName === name);
        if (index !== -1) {
            console.log("Contact Found");
            console.log("Name: "+addressBookArray[index].firstName+" "+addressBookArray[index].lastName+"\nPhoneNumber: "+addressBookArray[index].phNo+"\nEMail:"+addressBookArray[index].email);
        }
        else
            console.log("Contact not Found");
    }
    Filter(){
        let city = readlineSync.question('Enter the city: ');
        let cityArr=addressBookArray.filter(x=>x.city===city);
        if(cityArr!=null){
            console.log(cityArr);
        }
        else{
            console.log("No Contact found");
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
            let json = JSON.stringify(addressBookArray);
            fs.writeFileSync('addressBookFile.json',json);
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