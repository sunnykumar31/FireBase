import{
    getDatabase,ref,child,get,set,remove,update
} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js"

const db=getDatabase();

function getAllUserData(){
    const dbref=ref(db);
     
    get(child(dbref,"data/")).then((snapshot)=>{
        var users=[];
        snapshot.forEach((childSnapshot)=>{
            users.push(childSnapshot.val());
        });
        console.log(users);
        displayUsers(users);
    })
}

var stdNo=0;
var tbody=document.getElementById("tbody");

function displayUsers(UsersData){
    stdNo=0;
    tbody.innerHTML="";
    UsersData.forEach((user)=>{
        let tr=document.createElement("tr");

        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");
        let td4=document.createElement("td");
        let td5=document.createElement("td");
        let td6=document.createElement("td");
        
        td1.innerText=++stdNo;
        td2.innerText=user.RollNo;
        td3.innerText=user.Name;
        td4.innerText=user.Gender;
        td5.innerText=user.Contact;
        td6.innerText=user.Address;
        
        
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);

        tbody.append(tr);

    });

}

window.onload=getAllUserData;