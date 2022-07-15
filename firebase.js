import{
    getDatabase,ref,get,set,update,remove,child,
} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js"

var rollV,nameV,genderV,contactV,addressV;

const db=getDatabase();

var RollNo=document.getElementById("rollnobox");
var Name=document.getElementById("namebox");
var Gender=document.getElementById("genbox");
var Contact=document.getElementById("contactNo")
var Address=document.getElementById("addbox");


function insertData(e){
    e.preventDefault();
    readFormData();
    if(rollV=="" && nameV=="" && genderV=="" && contactV && addressV==""){
        alert("Fields can not be blank");
    }
    else{
        set(ref(db,"data/" + rollV),{
            RollNo:rollV,
            Name:nameV,
            Gender:genderV,
            Contact:contactV,
            Address:addressV,
        })
        .then(()=>{
            alert("Data Stored Successfully");
        })
        .catch((error)=>{
            alert("Unseccusfull",error);
        })
    }
    clearFormData();
}


function readData(e){
    e.preventDefault();
    readFormData();

    const dbref =ref(db);

    if(rollV=="" && nameV=="" && genderV==""  && contactV && addressV==""){
        alert("Fields can not be blank");
    }
    else{
        get(child(dbref,"data/" + rollV))
        .then((snapshot)=>{
            if(snapshot.exists()){
                Name.value=snapshot.val().Name;
                Gender.value=snapshot.val().Gender;
                Contact.value=snapshot.val().Contact;
                Address.value=snapshot.val().Address;
            }
            alert("Data fetch Successfully");
        })
        .catch((error)=>{
            alert("Unseccusfull",error);
        })
    }
}
function updateData(e){
    e.preventDefault();
    readFormData();

    if(rollV=="" && nameV=="" && genderV==""  && contactV  && addressV==""){
        alert("Fields can not be blank");
    }
    else{
        update(ref(db,"data/" + rollV),{
            Name:nameV,
            Gender:genderV,
            Contact:contactV,
            Address:addressV,
        })
        .then(()=>{
            alert("Data Updated Successfully");
        })
        .catch((error)=>{
            alert("Unseccusfull",error);
        })
    }

    clearFormData();
}
function deleteData(e){
    e.preventDefault();
    readFormData();

    if(rollV=="" && nameV=="" && genderV==""   && contactV && addressV==""){
        alert("Fields can not be blank");
    }
    else{

        if(confirm("Are you sure to Delete the data?")){

            remove(ref(db,"data/" + rollV))
            .then(()=>{
                alert("Data Deleted  Successfully");
            })
            .catch((error)=>{
                alert("Unseccusfull",error);
            });
        }
    }

    clearFormData();
}

document.querySelectorAll(".btn")[0].onclick=insertData;
document.querySelectorAll(".btn")[1].onclick=readData;
document.querySelectorAll(".btn")[2].onclick=updateData;
document.querySelectorAll(".btn")[3].onclick=deleteData;


var rollV,nameV,genderV,addressV;
function readFormData(){
    rollV=RollNo.value;
    nameV=Name.value;
    genderV=Gender.value;
    contactV=Contact.value;
    addressV=Address.value;
    console.log(rollV,nameV,genderV,contactV,addressV);
}

function clearFormData(){
    RollNo.value="";
    Name.value="";
    Gender.value="";
    Contact.value="";
    Address.value="";
}