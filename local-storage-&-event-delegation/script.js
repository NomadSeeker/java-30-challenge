const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  let items = localStorage.getItem('items') || [];
  const itemInput = document.querySelector('[name=item]');

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const itemName = data.get('item');
    if(itemName) {
        const item = {
          name: itemName,
          done: false
        }
        items.push(item);
        saveItems();
    }
    
    if(items.length > 0) {
      
      populateList(items);
    }
    itemInput.value = '';
  }

  function populateList(plates =  [], platesList) {
    platesList.innerHTML = plates.map((plate, index) => {
      return `<li><input type="checkbox" data-index=${index} id="items${index}" ${plate.done ? 'checked' : ''} />
      <label for="item${index}">${plate.name}</label><li>`;
    }).join('');
  }

  function saveItems() {
    localStorage.setItem('items', JSON.stringify(items));

    
  }

  function toggleDone(e) {
      if(e.target.matches('input')) {
          const element = e.target;
          const index = element.dataset.index;
          items[index].done = !items[index].done;
          localStorage.setItem('items', JSON.stringify(items));
          populateList(items, itemsList);
      }
  }

 items.forEach(item => {
    itemsList.innerHTML += `<li>${item}</li>`;
 });

  populateList();
  addItems.addEventListener('submit', handleSubmit);
  itemsList.addEventListener('click', toggleDone);

