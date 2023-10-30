
// Qustion 1 
// For loop , for in, for of.

const arr = [{
  person1 :{
    name : "Surya",
    age:20,
    location:"tirupathur"
  },
  person2:{
    name:"Sakthi",
    age :21,
    location:"tirupathur"
  }
}]
 
for(var i=0; i<arr.length;i++){
  console.log(arr[i]);
}

for(let key in arr){
  console.log(arr[key]);

}

for(let val of arr){
  console.log(val.person2.name);
}


// qustion 2

     const resume =[{
       personDetiles:{
        name:"Surya",
        age : 20,
        Contactnumber:987654321,
        Email:"Devilsurya265@gmail.com",
        garduativeted : 2023
       },
       Personadderess:{
        location:"Tirupathur ",
           Area : "Thayapa nagar",
            doornumber : 31,
             pincode : 635601
       },
       personQualification:{
        degree:"BSc mathematics",
        degreepercentage: 75,

       },
       personskill:{
        englishknowlage: "very good in english",
        Comunicationskil:"good",
        
       }
     }]
     console.log(resume);