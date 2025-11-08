const mainElem = document.getElementById(`categories`);

const allScopeLi = mainElem.querySelectorAll(':scope > li');
console.log("Number of categories: ",allScopeLi.length);

for (const elem of allScopeLi){
    console.log("Category: ",elem.querySelector('h2').textContent);
    console.log("Elements: ",elem.querySelectorAll('li').length);
}