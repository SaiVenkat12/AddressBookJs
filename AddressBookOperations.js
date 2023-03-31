var readlineSync = require('readline-sync');
const utility = require('./AddressBookUtility');
const AddressBookUtility = require('./AddressBookUtility');

function Operations() {
    const select = readlineSync.question('Enter the choice A)Add Contact - ')
        switch (select) {
            case 'A':
                utility.AddContacts();
                utility.Display();
                break;
        }
    
}
Operations();