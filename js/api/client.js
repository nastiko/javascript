//EXERCISE #1
async function ex1() {
    return Promise.resolve(1);
}

//ex1().then(alert);

//--------------

//EXERCISE #2
async function ex2() {
    return 1;
}

//ex2().then(alert);

//--------------

//PRACTICE #1
async function showAvatar() {

    // request JSON with user data
    let response = await fetch('data/promise-chaining/user.json');
    let user = await response.json();

    // request info's user from gitHub
    let gitHubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let gitHubUser = await gitHubResponse.json();

    // show avatar on the web page
    let block = document.getElementById('pr1-block');
    let img = document.createElement('img');
    img.src = gitHubUser.avatar_url;
    img.className = "promise-avatar-example";

    block.appendChild(img);

    // waiting 3 sec and hiding avatar
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    img.remove();

    return gitHubUser;
}

showAvatar();

//--------------

//PRACTICE #2
function practice2() {

    let text = '{"name":"John", "age":30, "city":"New York"}';

    // convert text into a JavaScript object
    let obj = JSON.parse(text);

    let block = document.getElementById('pr2-block');
    let paragraph = document.createElement('p');
    paragraph.textContent = ` ${obj.name}, ${obj.age}`;

    block.appendChild(paragraph);
}

//practice2();

//--------------

//EXERCISE #3
function ex3() {
    fetch('http://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
}

//ex3();

//--------------

//EXERCISE #4
function ex4() {
    const newPost = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', // Here can be GET, PUT, DELETE
        body: JSON.stringify(newPost), // convert objectJS into JSON text
        headers: {
            // adding needed headers
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // {title: "foo", body: "bar", userId: 1, id: 101}
        })
}

//ex4();

//--------------

//PRACTICE #3
async function showProducts(currentPage, showPerPage) {

    let block = document.getElementById('pr3-block');
    let btnNext = document.getElementById('next-btn');

    btnNext.addEventListener('click', nextItems);

    let currentPageSkip = currentPage * showPerPage;
    let url = `https://dummyjson.com/products?limit=${showPerPage}&skip=${currentPageSkip}&select=title,price`;

    let response = await fetch(url);
    let result = await response.json();

    //async loop return only Promise, get data from server.
    // The order is guaranteed because the next request will not start until the previous one has finished.
    for await (let item of result['products']) {
        let paragraphs = document.createElement('p');
        paragraphs.innerHTML += item.title;
        block.appendChild(paragraphs);
    }

    function nextItems() {
        let paragraphs = document.querySelectorAll('#pr3-block p');
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs.innerHTML += '';
            //++currentPage;
        }
    }

}

let currentPage = 0;
let showPerPage = 10;

showProducts(currentPage, showPerPage);

