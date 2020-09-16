// array on item
const items = [
  {
    text: 'wash dishes',
    isDone: true,
  },
  {
    text: 'make the bed',
    isDone: false,
  },
  {
    text: 'grocery shop',
    isDone: true,
  },
  {
    text: 'take out the trash',
    isDone: false,
  },
  {
    text: 'walk the dog',
    isDone: false,
  },
]

// view items
// function that renders items
const renderItems = () => {
  // grab list and remove everything then  re-render
  document.getElementById('items').innerHTML = ''
  for (let i = 0; i < items.length; i++) {
    // console.log(items[i])

    // make the list item
    let itemElem = document.createElement('li')
    // add multiple bootstrap classes by using 'classList' 
    itemElem.classList.add('list-group-item')
    //conditional check if item is done (if items @ index[i] is done is true than add success class, if false add secondary)
    itemElem.classList.add(items[i].isDone ? 'list-group-item-success' : 'list-group-item-secondary')
    // add bootstrap classes to make button clickable
    itemElem.classList.add('d-flex', 'justify-content-between', 'align-items-center')
    // want item at index i text property
    itemElem.innerHTML = `
            ${items[i].text}
            <button class="btn btn-warning markDone" data-index="${i}">✓</button>
            <button class="btn btn-danger removeItem" data-index="${i}">X</button>
          `
    // put items into items ul list
    document.getElementById('items').append(itemElem)
  }
}

// add an item function
const addItem = () => {
  // create custom object and push to new array
  items.push({
    text: document.getElementById('item').value,
    isDone: false
  })
  renderItems()
  document.getElementById('item').value = ''
}

// get index of item from data-set="index"
const markDone = (index) => {
  // index of item marking as done
  // do NOT need to know value just need to know it was clicked and want it to be opposite value
  items[index].isDone = !items[index].isDone
  renderItems()
}

// remove item funciton
const removeItem = (index) => {
  // use splice method to remove a quantity of elements at a certain index
  items.splice(index, 1)
  renderItems()
}

document.getElementById('addItem').addEventListener('click', (event) => {
  event.preventDefault()
  // console.log('ping')

  // call addItem function
  addItem()
})

document.addEventListener('click', (event) => {
  // contains lets us check to see if a class list contins the class list 'mark done'
  // console.log(event.target.classList.contains('markDone'))

  // 
  if (event.target.classList.contains('markDone')) {
    // console.log(event.target.dataset.index)
    markDone(event.target.dataset.index)
  } else if (event.target.classList.contains('removeItem')) {
    removeItem(event.target.dataset.index)
  }
})

renderItems()