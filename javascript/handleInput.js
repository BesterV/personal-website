
const body = document.getElementsByTagName("body")[0];
const posts = document.getElementsByClassName("post");

for (let i = 0; i < posts.length; i++) {
    const element = posts[i];
    element.addEventListener("click", function(e) {
        if (e.target.className !== "post-close-button") {
            if (!element.classList.contains("post-expanded")) {
                element.classList.add("post-expanded");
            }
        }
    });    
}

body.addEventListener("click", function(e) {
    if(e.target.tagName === 'BODY') {
        const element = document.getElementsByClassName("post-expanded")[0];
        if (element !== undefined) {
            element.classList.remove("post-expanded");
            element.children[1].scrollTop = 0;
        }
    }
});

function closeButtonClick(e) {
    const element = document.getElementsByClassName("post-expanded")[0];
    element.classList.remove("post-expanded");
    element.children[1].scrollTop = 0;
}
