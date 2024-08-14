// When the user scrolls the page, execute the stickyNavbar function
window.onscroll = function() {
    stickyNavbar();
};

// navbar
var navbar = document.querySelector(".navbar");

//toggle
document.getElementById('hamburgerBtn').addEventListener('click', function() {
    document.getElementById('sidebar').style.display = 'block';
});

// sidebar close button functionality
document.getElementById('closeSidebarBtn').addEventListener('click', function() {
    document.getElementById('sidebar').style.display = 'none';
});


// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Example current notification data
const currentNotification = {
    name: "Foster Grant Men Active Way Shaped Sport Sunglasses, Black",
    category: "Clothing",
    location: "C11"
};

// Display the current notification
document.getElementById('current-notification-content').textContent = `${currentNotification.name} - ${currentNotification.category}, Location: ${currentNotification.location}`;

function showNotification(message) {
  const panel = document.getElementById('notification-panel');
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  panel.appendChild(notification);

  // Automatically remove notification after 5 seconds
  setTimeout(() => {
    panel.removeChild(notification);
  }, 5000);
}


// Sample data of previous theft notifications
const previousNotifications = [
    {
        name: "Galaxy Watch7 40mm, Cream, Bluetooth",
        category: "Electronics",
        location: "A20"
    },
    {
        name: "RTIC 32 OZ Stainless Steel Insulated Bottle, Wide Mouth Multi-Use Lid, Black",
        category: "Household",
        location: "D15"
    },
    {
        name: "Samsung Galaxy Book4 360 15.6 inch Touchscreen",
        category: "Electronics",
        location: "A26"
    },
    // Add more notifications as needed
];

// Function to display previous notifications
function displayPreviousNotifications() {
    const previousNotificationsDiv = document.getElementById('previous-notifications');
    previousNotifications.forEach(notification => {
        const notificationDiv = document.createElement('div');
        notificationDiv.className = 'previous-notification';
        notificationDiv.innerHTML = `<strong>${notification.name}</strong><br><span>${notification.category}, Location: ${notification.location}</span>`;
        previousNotificationsDiv.appendChild(notificationDiv);
    });
}

// Display previous notifications on page load
displayPreviousNotifications();




// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
