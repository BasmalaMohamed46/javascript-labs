
document.addEventListener("DOMContentLoaded", () => {

    var url="https://dummyjson.com/users";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            DisplayUser(data.users);
        })
        .catch(error => console.error('Error fetching user data:', error));
    });

function DisplayUser(users) {
   var usersArr=Array.from(users);
   var container=document.getElementById("container");
   console.log(usersArr);
   for(var i=0;i<usersArr.length;i++)
   {
       var user=usersArr[i];
       var userDiv=document.createElement("div");
       userDiv.setAttribute("class","card");
       var Image=document.createElement("img");
       Image.setAttribute("class","card-image");
       Image.setAttribute("src",user.image);
       userDiv.appendChild(Image);
       var cardContent=document.createElement("div");
       cardContent.setAttribute("class","card-content");
       userDiv.appendChild(cardContent);
       var email=document.createElement("p");
       email.innerHTML=user.email;
       cardContent.appendChild(email);
       container.appendChild(userDiv);
   }
}