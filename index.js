console.log("Hello");
console.log("index js detected");
const texts= document.getElementsByTagName('h1');
for(let text of texts)console.log(text.innerText);
console.log("QuerySelectorAll Start");
const rhq=document.querySelectorAll('#rhq');
for(let text of rhq)console.log(text.innerText);