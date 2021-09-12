
const posts = document.getElementsByClassName("post");

for (let i = 0; i < posts.length; i++) {
    const element = posts[i];
    element.addEventListener("click", function() {
        element.classList.toggle("post-expanded");
        console.log(element.classList);
    });    
}