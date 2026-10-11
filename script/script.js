// Input DOM
let btn_add = document.getElementById("btn_add");
let txt_add = document.getElementById("txt_add");
let book_list = document.getElementById("book_list");

let new_bookList = [];

// Events
btn_add.addEventListener('click', function(){Add_book(txt_add);});

// Functions
function Add_book(new_book){
    if(new_book.value !== ""){
        new_bookList.push(new_book.value);
        Print_bookList();
        new_book.value = "";
    }
}

function Print_bookList(){
    book_list.innerText = "";
    for(let i = 0; i  < new_bookList.length; i++){
        let new_book = document.createElement("li");
        new_book.innerText = new_bookList[i];
        book_list.appendChild(new_book);
    }
}