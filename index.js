console.log("Hello");
console.log("index js detected");
const texts= document.getElementsByTagName('h1');
for(let text of texts)console.log(text.innerText);
console.log("QuerySelectorAll Start");
const rhq=document.querySelectorAll('#rhq');
for(let text of rhq)console.log(text.innerText);
// style in js
document.getElementById('arizona').style.textAlign='center'
document.getElementById('arizona').style.fontSize='45px';
document.getElementById('arizona').style.fontWeight='bold';
document.getElementById('arizona').style.color='brown';

