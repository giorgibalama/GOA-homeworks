
const list = document.getElementById('myList');


const newItem = document.createElement('li');
newItem.textContent = 'New last item';
list.appendChild(newItem);

if (list.firstElementChild) {
  list.removeChild(list.firstElementChild);
}


const listItems = list.getElementsByTagName('li');
if (listItems.length > 1) {  
  listItems[1].textContent = 'Modified second item';
}