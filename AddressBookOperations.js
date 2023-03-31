var readlineSync = require('readline-sync');
const utility = require('./AddressBookUtility');
const AddressBookUtility = require('./AddressBookUtility');

function Operations() {
    const select = readlineSync.question('Enter the choice A)Add Contact B)Add Multiple Contacts D)Delete U)Update Contact d)Display \nEnter any other to Exit: ')
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