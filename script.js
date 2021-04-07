//Ambil element
const skills=document.getElementById("skill");

//buat variable
const mySkills=["ES6","UX Design","GIT"] //array dikasi nama yg plural 
console.log(mySkills)

mySkills.push("Dev Ops")

//di function namanya lebih baik singular 
function showSkill(mySkill){
    console.log(mySkill);
}

const showSkill2=(mySkill) =>{ //Arrow function
    console.log(mySkill)
};

//foreach
mySkills.forEach((mySkill) => {
    console.log(mySkill)
});

let parent="<ul>"

mySkills.forEach(function(mySkill){
    // console.log(mySkill)
    parent+=`<li>${mySkill}</li>`
});
parent+="</ul>"

mySkills.forEach(showSkill2)
skills.innerHTML=parent