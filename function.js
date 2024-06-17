// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the "Drinks" link element
    var drinksLink = document.querySelector(".links");

    // Add a click event listener to the "Drinks" link
    drinksLink.addEventListener("click", function(event) {
        // Prevent the default link behavior (e.g., navigating to a new page)
        event.preventDefault();

        // Get the top offset of the "Drinks Reader 3" section
        var drinksSection = document.querySelector(".heading");
        var drinksSectionOffset = drinksSection.offsetTop;

        // Scroll the page to the top offset of the "Drinks Reader 3" section
        window.scrollTo({
            top: drinksSectionOffset,
            behavior: "smooth" // Optional: Smooth scrolling animation
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Get the .inner-menu-1 element
    var innerMenu1 = document.querySelector(".inner-menu-1");

    // Add a click event listener to the .inner-menu-1 element
    innerMenu1.addEventListener("click", function(event) {
        // Prevent the default link behavior (e.g., navigating to a new page)
        event.preventDefault();

        // Load the separate HTML file containing the Reader 5 section
        window.location.href = "reader5.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Get the .inner-menu-2 element
    var innerMenu2 = document.querySelector(".inner-menu-2");

    // Add a click event listener to the .inner-menu-2 element
    innerMenu2.addEventListener("click", function(event) {
        // Prevent the default link behavior (e.g., navigating to a new page)
        event.preventDefault();

        // Load the separate HTML file containing the Reader 6 section
        window.location.href = "reader6.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Get the .inner-menu-3 element
    var innerMenu2 = document.querySelector(".inner-menu-3");

    // Add a click event listener to the .inner-menu-2 element
    innerMenu2.addEventListener("click", function(event) {
        // Prevent the default link behavior (e.g., navigating to a new page)
        event.preventDefault();

        // Load the separate HTML file containing the Reader 6 section
        window.location.href = "reader7.html";
    });
});
