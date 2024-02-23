async function addTodo(event) {
    event.preventDefault();
    var webTitle = document.getElementById("web-title").value;
    var weburl = document.getElementById("web-url").value;

    document.getElementById("web-title").value = "";
    document.getElementById("web-url").value = "";
    
    let saveObj = {
        webTitle,
        weburl
    }
       
        try {
            const response1 = await axios.post("https://crudcrud.com/api/4c4fbe7d16564efcb7d287587d3fc327/appointmentdata", saveObj)
            addTodoList(response1.data);
        addTodoList();
        } catch (err) {
            console.log(err);
        }
}

function deleteTodo(button) {
    var todoItem = button.parentElement;
    todoItem.remove();
}
function editTodo(button){
    document.getElementById("web-title").value = button.parentElement.children[0].innerHTML;
    document.getElementById("web-url").value = button.parentElement.children[1].innerHTML;
    var todoItem = button.parentElement;
    todoItem.remove(); 
}

const addTodoList = (element) => {
    // var webTitle = document.getElementById("web-title").value;
    // var weburl = document.getElementById("web-url").value;
    // Clear input fields
    // document.getElementById("web-title").value = "";
    // document.getElementById("web-url").value = "";
    // create a li tag 
    const list = document.createElement("li");
    list.innerHTML += 
    `
    <span class="todo-name">${element.webTitle}  </span>
    <a href=${element.weburl} target = "_blank">${element.weburl}</a>
    <button onclick="deleteTodo(this)">Delete</button>
    <button onclick="editTodo(this)">Edit</button>
`;
    // `${webTitle} ${aTag.innerHTML} ${delValue} ${editValue}`;
    document.getElementById("web-list").appendChild(list);

}

window.addEventListener(("DOMContentLoaded"), loadFunc);
async function loadFunc() {
    try {
        const response1 = await axios.get('https://crudcrud.com/api/4c4fbe7d16564efcb7d287587d3fc327/appointmentdata')
        for (let i = 0; i < response1.data.length; i++) {
            addTodoList(response1.data[i]);
        }
    } catch (err) {
        console.log(err);
    }
}
