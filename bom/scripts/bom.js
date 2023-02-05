
const list = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.querySelector('input');


button.onclick = function() {
  let myItem = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listButton = document.createElement('button');

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listButton);
  listButton.textContent = '❌';
  list.appendChild(listItem);

  listButton.onclick = function(e) {
    list.removeChild(listItem);
  }

  input.focus();
}
