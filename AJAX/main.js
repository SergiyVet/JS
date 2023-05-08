// ------------ working with AJAX ------------
// fetch(URL, HTTP_mehtod, parameters);

const usersApi = 'https://jsonplaceholder.typicode.com/users';
const taskApi = 'https://jsonplaceholder.typicode.com/todos';

async function getServerData(url) {
    // make HTTP GET request
    let response = await fetch(usersApi);
    let tod = await fetch(taskApi);
    console.log(`Response status: ${response.status}`);

    const data = await response.json();
    const task = await tod.json();
    console.log(`Data:`, data);
    console.log(`task:`, task);


    renderUsers(data);
    /*
    let but = document.getElementById(`baton1`);
    but.onclick = () => {
        addTask(task);
    }
    */
    click(task);
    
}

getServerData(usersApi);

function click(users) {
    for (const u of users) {
        let but = document.getElementById(`baton${u.userId}`);
        but.onclick = () => {
            console.log(u.userId);
            
            for (const r of users) { 
                if (r.userId == u.userId) {
                    const user = document.getElementById(`user${r.userId}`);
                    user.innerHTML += `<ul class="task">
                    <li>${r.title}</li>
                </ul>`
                }
            }
        }
        
    }
}
function renderUsers(users) {
    const list = document.getElementById('user-list');

    for (const u of users) {
        list.innerHTML += `<li id='user${u.id}'>${u.name} ${u.phone} <button id='baton${u.id}'>Task</button> <button id='bato${u.id}'>Clear</button></li>`
    }
}
function addTask(users) {
    for (const u of users) {
        const user = document.getElementById(`user${u.userId}`);
        user.innerHTML += `<ul class="task">
        <li>${u.title}</li>
    </ul>`
    }
}