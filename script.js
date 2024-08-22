// Disable Right Click
document.oncontextmenu = new Function("return false;")
document.onselectstart = new Function("return false;")


// Google Long Press
document.addEventListener('DOMContentLoaded', function () {
    let timer;
    const longPressDuration = 1000; // 1000 milliseconds = 1 second

    const googleButton = document.getElementById('googleButton');

    googleButton.addEventListener('mousedown', function () {
        timer = setTimeout(function () {
            $('#googleModal').modal('show'); // Show the modal when long press is detected
        }, longPressDuration);
    });

    googleButton.addEventListener('mouseup', function () {
        clearTimeout(timer); // Cancel the popup if press is less than longPressDuration
    });

    googleButton.addEventListener('mouseleave', function () {
        clearTimeout(timer); // Cancel the popup if the user moves the mouse away before long press duration
    });
});
