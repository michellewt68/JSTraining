//Ambil element
const skills= document.getElementById('skills')
const primaryskill=document.getElementById('primarySkill')

const mySkills= ["ES6", " GIT"," Web-dev"]

//undefined --> salah
const printSkillsForEach=mySkills.forEach((skill)=>{
    return skill
})

//benar
const printSkillsMap=mySkills.map((skill)=>{
    return skill
})

skills.innerHTML=printSkillsMap;

//filter
const printPrimarySkill=mySkills.filter((skill)=>{
    return skill== 'ES6'
})

primaryskill.innerHTML=printPrimarySkill