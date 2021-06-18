const logInData = {
    url: 'https://localhost:44359/api/',
    type: 'user/auth_check?',
    username,
    pass
};

document.querySelector("#loginBtn").addEventListener("click", () => {
    var username = document.getElementById('username').value;
    var pass = document.getElementById('pass').value;
    logInData.username = username;
    logInData.pass = pass;

    const url = `${logInData.url}${logInData.type}username=${logInData.username}&pass=${logInData.pass}`
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
    xhr.onload = function () {
        var data = JSON.parse(this.responseText);
        if (data > 0) {
            window.location.href = "/HomePage";
        } else {
            console.log("its not working");
        }
    }
});