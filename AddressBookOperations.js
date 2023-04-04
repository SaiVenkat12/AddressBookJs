var readlineSync = require('readline-sync');
const utility = require('./AddressBookUtility');
const AddressBookUtility = require('./AddressBookUtility');

function Operations() {
    const select = readlineSync.question('Enter the choice \nA)Add Contact \nB)Add Multiple Contacts \nD)Delete \nU)Update Contact \nf)Find Contact \nd)Display \nF)Filter Contacts by City \nEnter any other to Exit: ')
    switch (select) {
        case 'A':
            utility.AddContacts();
            Operations();
            break;
        case 'B':
            let n = readlineSync.question('Enter the Number of Contacts Needed: ');
            for (i = 1; i <= n; i++) {
                utility.AddContacts();
            }
            Operations();
            break;
        case 'D':
            utility.DeleteContact();
            Operations();
            break;
        case 'U':
            utility.Update();
            Operations();
            break;
        case 'f':
            utility.FindContact();
            Operations();
            break;
        case 'F':
            utility.Filter();
            break;
        case 'd':
            utility.Display();
            Operations();
            break;
        default:
            console.log("Exit");
            break;
    }

}
Operations();