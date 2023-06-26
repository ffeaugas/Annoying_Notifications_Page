console.log('Hello world');

const element = document.querySelector('.post_picture');
element.addEventListener('click', function () {
    // window.alert('Vous avez cliqué sur le lien');
    if (element.style.visibility === 'visible')
        element.style.visibility = 'hidden';
    else
        element.style.visibility = 'visible';
})