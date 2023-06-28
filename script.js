/* DOM ELEMENTS */

const   markAllAsReadElement = document.querySelector('h3');
const   notificationElements = document.querySelectorAll('section');

/* EVENT LISTENERS */

markAllAsReadElement.addEventListener('click', function() {
    notificationElements.forEach(notification => {
        setNotificationRead(notification);
    })
})

notificationElements.forEach(notification => {
    notification.addEventListener('click', function() {
        setNotificationRead(notification);
    });
})

/* FUNCTIONS */

function setNotificationRead(notification) {
    notification.style.backgroundColor = 'white';
    notification.querySelector('.notification_dot').style.visibility = 'hidden';
}