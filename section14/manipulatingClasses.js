const todo = document.querySelector("#todos .todo");
todo.style.color = "gray";
todo.style.textDecoration = "line-through";
todo.style.fontSize = "20px";
todo.classList; // contains classes and methods to use on the element (neste caso todo)
todo.classList.remove("done");
todo.classList.toggle("done");
todo.classList.contains("done");
