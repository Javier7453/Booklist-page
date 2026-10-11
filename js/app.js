// Input DOM
let btn_add = document.getElementById("btn_add");
let txt_add = document.getElementById("txt_add");
let book_list = document.getElementById("book_list");

let new_bookList = JSON.parse(localStorage.getItem("list")) || [];

// Events
btn_add.addEventListener('click', function(){Add_book(txt_add);});

Print_bookList();

// Functions
function Add_book(new_book){
    if(new_book.value !== ""){
        new_bookList.push(new_book.value);
        Print_bookList();
        new_book.value = "";
        localStorage.setItem("list",JSON.stringify(new_bookList));
    }
}

function Print_bookList(){
    book_list.innerText = "";
    for(let i = 0; i  < new_bookList.length; i++){
        let new_book = document.createElement("li");
        let btn_delete = document.createElement("button");
        new_book.innerText = new_bookList[i];
        btn_delete.innerText = "Delete";

        btn_delete.addEventListener("click", function(){Delete_book(new_bookList[i]);});

        book_list.appendChild(new_book);
        book_list.appendChild(btn_delete);
    }
}

function Delete_book(book){
    new_bookList.splice(new_bookList.indexOf(book),1);
    Print_bookList();
    localStorage.setItem("list",JSON.stringify(new_bookList));
}