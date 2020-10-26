const display = document.querySelector('.result');
const list = document.querySelector('.todos');

const generateTemplate = todo => {

    const html = `
    <li>
    <span>${todo}</span>
    </li>
   
    `;
    list.innerHTML += html;
    
}

display.addEventListener('submit' , e => {

    e.preventDefault();
    const todo = display.result.value.trim();
    // console.log(todo);
    if(todo.length){
        generateTemplate(todo);
        display.reset();
    }
   
});

