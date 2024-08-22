// Disable Right Click
document.oncontextmenu = new Function("return false;")
document.onselectstart = new Function("return false;")




//redirect
document.addEventListener('DOMContentLoaded', function () {
    // Select all anchor tags on the page
    const links = document.querySelectorAll('a');

    // Loop through each link
    links.forEach(link => {
        // Add an event listener for clicks
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default action

            // Redirect to vhandar.com
            window.location.href = 'https://vhandar.com';
        });
    });
});

