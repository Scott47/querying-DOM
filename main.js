// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

const sectionOne=document.querySelector(".article__header")
console.log(sectionOne);
sectionOne.textContent="Welcome to Scott's blog"

// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.

const allHeaders=document.querySelectorAll(".article__header")
console.log(allHeaders)
for (let i = 0; i < allHeaders.length; i++) {
    allHeaders[i].classList.add("important")
    console.log(allHeaders[i]);
    console.log(allHeaders.cl)
}
console.log(sectionOne.classList)

// Obtain a reference the element with a class of dashed and remove it.

const dashed = document.querySelector(".dashed");
console.log("dashed", dashed)
dashed.classList.remove("dashed");
    
// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.  

const articleFooter = document.querySelector(".article__footer")
console.log("article__footer", articleFooter)
articleFooter.classList.add("goldenrod")

// const blogTextContent = sectionOne.textContent
// console.log(blogTextContent)
// const blogText = "This doesn't work"
// console.log(blogText)
// sectionOne.textContent="Welcome to Scott's blog"
