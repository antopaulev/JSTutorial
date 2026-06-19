const prompt = require("prompt-sync")()

function printInfo(){
    console.log("Contact Managment System")
    console.log("---------------------------")
    console.log("1.Add a Contacts")
    console.log("2.Delete a Contacts")
    console.log("3.View Contacts")
    console.log("4.Search Contacts")
    console.log("5.Exit")
}
function addContact(){
    const name = prompt("Name : ")
    const email  = prompt("email : ")
    const contact ={
        name:name,
        email:email
    }
    contacts.push(contact)
    console.log("Added")
}

function deleteContacts(){
    console.log("ContactId")
    for (let i = 0; i < contacts.length; i++){
        const contact = contacts[i]
        console.log((i + 1).toString() +":",contact.name )
    }
    const number = parseInt(prompt("enter the id to delete : "))
    if (number > contacts.length){
        console.log("invalid")
        return
    }
    else{
        contacts.splice(number - 1, 1)
        console.log("Removed.")
    }
}

function listContacts(contacts){ 
    for (let contact of  contacts){
        console.log("########################")
        console.log("Name: ",contact.name)
        console.log("Email: ",contact.email)
    }
//     for (let i = 0; i<contacts.length; i++)
//         console.log(contacts[i])  
}

function searchContacts(){
    const searchSrting = prompt("Enter the name u want tot search : ")
    const result = [];

    for (let contact of  contacts){
        if(contact.name.toLowerCase().includes(searchSrting))
            result.push(contact)
    }
    listContacts(result)

}
const contacts = []
printInfo()
let repeat = true
while(repeat){
    const choice = prompt("Enter the number between 1 - 5 : ")
    console.log()
    switch(choice){
        case "1":
            addContact();
            break;
        case "2":
            deleteContacts();
            break;  
        case "3":
            listContacts(contacts);
            break;
        case "4":
            searchContacts();
            break;
        case "5":
            repeat = false;
            break;
        default:
            console.log("invalid choice!!!!")
            break 
    }
}