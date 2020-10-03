//Select and access

const title= document.querySelector('#title');
const author= document.querySelector('#author');
const year= document.querySelector('#year');

const btnAddBook= document.querySelector("#addBook")
const tblBookList =document.querySelector("#book-list")


//adding events
//add event
btnAddBook.addEventListener('click',(event)=>{
 
event.preventDefault()
const row = document.createElement("tr"); 
 row.innerHTML=`
 <td> ${title.value}</td>
 <td> ${author.value}</td>
 <td> ${year.value}</td>
 <td><button class="btn btn-danger delete">X</button</td>
 `

 tblBookList.appendChild(row)
 clearField()
})

//delete
tblBookList.addEventListener('click',(event)=>{
console.log(event.target)
if(event.target.classList.contains('delete')){
   console.log(event.target.parentElement.parentElement) 
   event.target.parentElement.parentElement.remove();
}
})


function clearField(){
    title.value="";
    author.value="";
    year.value="";
}