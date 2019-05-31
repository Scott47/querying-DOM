// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
const sectionOne=document.querySelector(".article__header")
console.log(sectionOne);
const blogTextContent = sectionOne.textContent
console.log(blogTextContent)
const blogText = "This doesn't work"
console.log(blogText)
sectionOne.textContent="Welcome to Scott's blog"