/*async function getUsers(names) {
    let jobs = [];

    for (let name of names) {
        let job = await fetch(`https://api.github.com/users/${name}`).then(
            successResponse => {
                if (successResponse.status !== 200) {
                    return null;
                } else {
                    // return response body in JSON format
                    return successResponse.json();
                }
            }
        );

        jobs.push(job);

    }

    let result = await Promise.all(jobs);

    alert(result);
}

getUsers();*/

async function ex1() {
    return Promise.resolve(1);
}

//ex1().then(alert);

//--------------

async function ex2() {
    return 1;
}

//ex2().then(alert);

//--------------

async function showAvatar() {

    // request JSON with user data
    let response = await fetch('data/promise-chaining/user.json');
    let user = await response.json();

    // request info's user from gitHub
    let gitHubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let gitHubUser = await gitHubResponse.json();

    // show avatar on the web page
    let block = document.getElementById('ex1-block');
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
//--------------
//--------------
//--------------

