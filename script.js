let checkbox = document.querySelectorAll('.slider');
let container = document.querySelector('.container');


document.addEventListener('change', checkbox => {
    if (checkbox.target.checked) {
        container.classList.add('dark');
        document.querySelector('.off').innerHTML = 'ON';
        console.log('checked');
    } else {
        document.querySelector('.off').innerHTML = 'OFF';
        container.classList.remove('dark');
        console.log('unchecked');
    }
});