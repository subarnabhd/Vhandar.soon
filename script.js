// Disable Right Click
document.oncontextmenu = new Function("return false;")
document.onselectstart = new Function("return false;")




//redirect
document.addEventListener('DOMContentLoaded', function () {
    // Get the current path of the URL
    const currentPath = window.location.pathname;

    // Check if the current path is not the root '/'
    if (currentPath !== '/') {
        // Redirect to 'https://vhandar.com'
        window.location.href = 'https://vhandar.com';
    }
});
