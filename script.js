// You can add any interactive or animated features here
document.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('.fadeIn');
    let screenHeight = window.innerHeight;

    elements.forEach(function(element) {
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - screenHeight <= 0) {
            element.classList.add('visible');
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Get all buttons with the class 'read-more'
    const readMoreButtons = document.querySelectorAll('.read-more');

    // Add a click event listener to each button
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the article identifier from the data-article attribute
            const article = this.getAttribute('data-article');
            
            // Redirect to the respective article page
            window.location.href = article + '.html';
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Select the typewriter element
    const typewriterText = document.querySelector('.typewriter');

    // Add the typing animation class
    setTimeout(() => {
        // Start blinking cursor effect after typing is done
        typewriterText.classList.add('blinking-cursor');

        // Stop blinking after a delay (adjust the time as needed)
        setTimeout(() => {
            typewriterText.classList.remove('blinking-cursor'); // Remove blinking cursor
        }, 1000); // Cursor blinks for 1 second after typing
    }, 4000); // Match this time to the duration of the typing animation
});


document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav ul li');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#007BFF'; // Change background color on hover
            this.style.color = '#fff'; // Change text color on hover
        });

        link.addEventListener('mouseleave', function() {
            this.style.backgroundColor = ''; // Reset background color
            this.style.color = ''; // Reset text color
        });
    });
});
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    alert("Signup successful! Redirecting to the homepage...");
    window.location.href = 'index.html';
}

// JavaScript to handle like button
let likeCount = 0;
const likeButton = document.getElementById("likeButton");

likeButton.addEventListener("click", function() {
    likeButton.classList.toggle("liked");
    likeCount = likeButton.classList.contains("liked") ? likeCount + 1 : likeCount - 1;
    document.getElementById("likeCount").textContent = likeCount;
});

// JavaScript to handle comment posting and deletion
function postComment() {
    const commentInput = document.getElementById("commentInput");
    const commentText = commentInput.value.trim();

    if (commentText !== "") {
        const commentList = document.getElementById("commentList");
        const newComment = document.createElement("li");
        
        // Create a span for the comment text
        const commentContent = document.createElement("span");
        commentContent.textContent = commentText;
        newComment.appendChild(commentContent);

        // Create a delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.onclick = function() {
            commentList.removeChild(newComment);  // Remove comment when delete is clicked
        };

        newComment.appendChild(deleteButton);
        commentList.appendChild(newComment);

        commentInput.value = "";  // Clear the input field
    }
}
