// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
const sectionOne=document.querySelector(".article__header")
console.log(sectionOne);
sectionOne.textContent="Welcome to Scott's blog"

const allHeaders=document.querySelectorAll(".article__header")
console.log(allHeaders)
for (let i = 0; i < allHeaders.length; i++) {
    allHeaders[i].classList.add("important")
    console.log(allHeaders[i]);
    console.log(allHeaders.cl)
}
console.log(sectionOne.classList)
// const blogTextContent = sectionOne.textContent
// console.log(blogTextContent)
// const blogText = "This doesn't work"
// console.log(blogText)
// sectionOne.textContent="Welcome to Scott's blog"
