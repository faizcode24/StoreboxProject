// your code goes here
// Mobile navigation
function toggleMenu() {
    const nav = document.getElementById("navMenu");

    nav.classList.toggle("active");
}


// Booking modal
function openBooking() {
    document
        .getElementById("bookingModal")
        .classList.add("active");
}

function closeBooking() {
    document
        .getElementById("bookingModal")
        .classList.remove("active");
}


// Close modal when clicking outside
document
    .getElementById("bookingModal")
    .addEventListener("click", function (event) {

        if (event.target === this) {
            closeBooking();
        }

    });


// Search trips
function searchTrips() {

    const date = document.getElementById("travelDate").value;
    const travelers = document.getElementById("travelers").value;

    if (!date) {
        alert("Please select your travel date.");
        return;
    }

    alert(
        `Great! Searching trips for ${travelers} on ${date}.`
    );
}


// Booking form
document
    .getElementById("bookingForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        alert(
            "Thank you! Your travel enquiry has been submitted."
        );

        this.reset();

        closeBooking();

    });


// Set minimum travel date to today
const today = new Date()
    .toISOString()
    .split("T")[0];

document
    .getElementById("travelDate")
    .setAttribute("min", today);