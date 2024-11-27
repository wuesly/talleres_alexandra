const list = document.getElementById('my-list');

Array.from(list.children).forEach(item => {
    item.style.backgroundColor = 'yellow';
});




