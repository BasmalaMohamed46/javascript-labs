var op;
var ar=[];
var name;
var phone;
var searchval;
var searchtype;
do
{
  op = prompt("Enter operator (add , search): ")

    switch(op)
    {
        case "add":
        name=prompt("Enter name:");
        phone=prompt("Enter phone number:")
        ar.push({name:name,phone:phone}) 
        break;
        case "search":
            searchtype=prompt("Enter search type (name, phone):")
            if(searchtype!="name" && searchtype!="phone")
            {
                alert("Invalid search type");
                break;
            }
            searchval=prompt("Enter search value:")
            if(searchtype == "name")
            {
                var contact = ar.find(function(contact){
                    return contact.name == searchval;
                })
            }
            else if(searchtype == "phone")
            {
                var contact = ar.find(function(contact){
                    return contact.phone == searchval;
                })
            }
            if(contact)
            {
                alert("contact found: \n name: "+contact.name+"\n phone: "+contact.phone);
            }
            else
            {
                alert("Contact not found");
            }

         break;
        default:
            alert("Invalid operator.");
            op = null; 
            break;
    }
}
while(op)