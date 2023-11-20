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
        console.log(todos);
    })
});