class Contact {
    constructor(name, phone, email, address) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.address = address;
    }
}
class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
        this.displayContacts();
    }

    displayContacts() {
        const contactList = document.getElementById('contact-table').getElementsByTagName('tbody')[0];
        contactList.innerHTML = '';

        this.contacts.forEach(function (contact) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${contact.name}</td>
                <td>${contact.phone}</td>
                <td>${contact.email}</td>
                <td>${contact.address}</td>
            `;
            contactList.appendChild(row);
        });
    }
}
const myAddressBook = new AddressBook();

function addNewContact(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const addressInput = document.getElementById('address');

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();
    const address = addressInput.value.trim();

    if (name && phone && email && address) {
        const newContact = new Contact(name, phone, email, address);
        myAddressBook.addContact(newContact);

        nameInput.value = '';
        phoneInput.value = '';
        emailInput.value = '';
        addressInput.value = '';
    } else {
        alert('Please fill in all fields.');
    }
}

function addTask() {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById('task-list');

        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '×';
        deleteButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskList.appendChild(listItem);

        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
}
