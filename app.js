// var titles = document.getElementsByClassName('title');

// console.log(titles);

// // console.log(Array.isArray(titles));
// console.log(Array.from(titles));

// Array.from(titles).forEach(item => {
//     console.log(item);
// })

// const wmf = document.querySelector('#book-list > ul > li:nth-child(2) > span.name');

// // console.log(wmf);

// var books = document.querySelector('#book-list ul li .name');
// console.log(books);

// books = document.querySelectorAll('#book-list li .name');
//  console.log(books);

// Array.from(books).forEach(book => {
//     console.log(book);
// });



// var books = document.querySelectorAll('#book-list span.name');

/*
NB:when using the queryselector and it returns a nodelist you 
dont need to turn it to array b4 using the forEach method
but in the case of getelementby id, you have to convert it 
to an array with the array.from to use the forEach method
on it cuz its returning html collections
*/

// Array.from(books).forEach(book => { 
//     // appending 'book title' to the textContent.
//     book.textContent += ' (book title)';
// });

// const bookList = document.querySelector('#book-list');
// bookList.innerHTML = '<h2>Books and more books...</h2> ';

// bookList.innerHTML += '<p> This is how you add HTML</p>';


// const banner = document.querySelector('#page-banner');

// console.log('#page-banner node type is:', banner.nodeType);
// console.log('#page-banner node type is:', banner.nodeName);
// console.log('#page-banner has child nodes:', banner.hasChildNodes());

// const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner);

// const bookList = document.querySelector('#book-list');

// console.log('the parent node is:', bookList.parentNode);
// console.log('the parent element is:', bookList.parentElement.parentElement);

// console.log(bookList.children);

// const bookList = document.querySelector('#book-list');

// console.log('booklist next sibling is:', bookList.nextSibling);
// console.log('booklist next element sibling is:', bookList.nextElementSibling);

// console.log('booklist previous sibling is:', bookList.previousSibling);
// console.log('booklist previous element sibling is:', bookList.previousElementSibling);

// bookList.previousElementSibling.querySelector('p').innerHTML += '<br/>Too cool for everyone else!';

// var btns = document.querySelectorAll('#book-list .delete');

// Array.from(btns).forEach(btn => {
//     btn.addEventListener('click', e => {

//         const li = e.target.parentElement;
//         li.parentNode.removeChild(li); 

//     });
// });


// const link = document.querySelector('#page-banner a');

// link.addEventListener('click', e => {
//     e.preventDefault();
//     console.log('navigation to', e.target.textContent, 'was prevented');
// })


// const list = document.querySelector('#book-list ul');

// // delete books
// list.addEventListener('click', e => {
//     if(e.target.className === 'delete'){
//         const li = e.target.parentElement;
//         list.removeChild(li);
//     }
// })

// // add book-list
// const addForm = document.forms['add-book'];

// addForm.addEventListener('submit', e => {
//     e.preventDefault();
//     const value = addForm.querySelector('input[type="text"]').value;
    
//     // create element
//     const li = document.createElement('li');
//     const bookName = document.createElement('span');
//     const deleteBtn = document.createElement('span');

//     // add content
//     deleteBtn.textContent = 'delete';
//     bookName.textContent = value;

//     // add classes
//     bookName.classList.add('name');
//     deleteBtn.classList.add('delete');


//     // append to DOM
//     li.appendChild(bookName);
//     li.appendChild(deleteBtn);
//     list.appendChild(li);




// });


const list = document.querySelector('#book-list ul');

// delete books
list.addEventListener('click', e => {
    
})

// add book-list
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', e => {
    
});

// hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', e => {
    if(hideBox.checked){
        list.style.display = "none";
    } else {
        list.style.display = "initial";
    }
});








