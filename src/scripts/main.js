/* declaring the variable signifying the placeholder for the string interpolation */

const container = document.querySelector("#wishList")

/* function adding an event listener to the button */

document.querySelector("#saveEntry").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    const itemPurchased = document.querySelector("#itemPurchased").value
    const store = document.querySelector("#location").value

    // Once you have collected all the values, update the DOM
    // with some HTML
    container.innerHTML = `I can purchase ${itemPurchased} at ${store}.`

})