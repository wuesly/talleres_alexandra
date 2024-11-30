const addButton = document.getElementById('botoonsito');
const ul = document.getElementById('list');

addButton.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = `wer ${ul.childElementCount + 1}`;
    ul.appendChild(li);
});
