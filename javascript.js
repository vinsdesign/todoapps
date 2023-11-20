document.addEventListener('DOMContentLoaded', function(){
    const submitForm = document.getElementById('form');
    
    // onSubmit
    submitForm.addEventListener('submit', function(event){
        event.preventDefault();
        addTodo();
    });
    function addTodo(){
        const textTodo = document.getElementById('title').value;
        const timeStamp = document.getElementById('date').value;

        const generateID = generateId();
        const todoObject  = generateTodoObject(generateID, textTodo, timeStamp, false);
        todos.push(todoObject);

        document.dispatchEvent(new Event(RENDER_EVENT));
    }
    function generateId(){
        return +new Date();
    }
    function generateTodoObject(id, task, timestamp, isComplated){
        return{
            id,
            task,
            timestamp,
            isComplated
        }
    }
    const todos = [];
    const RENDER_EVENT = 'render-todo';

    document.addEventListener(RENDER_EVENT, function(){
        // console.log(todos);
        const uncomplatedTODOList = document.getElementById('todos');
        uncomplatedTODOList.innerHTML ='';
        
        for (const todoItem of todos){
            const todoElement = makeTodo;
            uncomplatedTODOList.append(todoElement);
        }

    });

    function makeTodo(todoObject){
        const textTitle = document.createElement('h2');
        textTitle.innerText = todoObject.task;

        const textTimeStamp = document.createElement('p');
        textTimeStamp.innerText =todoObject.timestamp;

        const textContainer = document.createElement('div');
        textContainer.classList.add('inner');
        textContainer.append(textTitle,textTimeStamp);

        const container = document.createElement('div');
        container.classList.add('item', 'shadow');
        container.append(textContainer);
        container.setAttribute('id', `todo-$(todoObject.id)`);

        return container;
    }

});