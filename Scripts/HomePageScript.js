var view_index;

const database = {
    url: 'https://localhost:44359/api/',
    type: 'person',
}


const SearchData = {
    url: 'https://localhost:44359/api/',
    type: 'person/',
    id : -1,
};

window.onload = function () {
    const url = `${database.url}${database.type}`
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
    xhr.onload = function () {
        var data = JSON.parse(this.responseText);
        load_database(data);
    }
};

load_database = function (data) {
    if (data.length != null) {
        for (var i = 0; i < data.length; i++) {
            var id = data[i].person_ID;
            var name = data[i].name;
            var gender = data[i].gender;
            var age = data[i].age;
            var condition = data[i].condition;

            var element = document.getElementById("table_body");
            var head = document.createElement('tr');
            var body1 = document.createElement('td');
            var body2 = document.createElement('td');
            var body3 = document.createElement('td');
            var body4 = document.createElement('td');
            var body5 = document.createElement('td');
            var text = document.createTextNode(id);
            body1.appendChild(text);
            var text = document.createTextNode(name);
            body2.appendChild(text);
            var text = document.createTextNode(gender);
            body3.appendChild(text);
            var text = document.createTextNode(age);
            body4.appendChild(text);
            var text = document.createTextNode(condition);
            body5.appendChild(text);
            head.appendChild(body1);
            head.appendChild(body2);
            head.appendChild(body3);
            head.appendChild(body4);
            head.appendChild(body5);

            element.appendChild(head);
        }
    } else {
        var id = data.person_ID;
        var name = data.name;
        var gender = data.gender;
        var age = data.age;
        var condition = data.condition;

        var element = document.getElementById("table_body");
        var head = document.createElement('tr');
        var body1 = document.createElement('td');
        var body2 = document.createElement('td');
        var body3 = document.createElement('td');
        var body4 = document.createElement('td');
        var body5 = document.createElement('td');
        var text = document.createTextNode(id);
        body1.appendChild(text);
        var text = document.createTextNode(name);
        body2.appendChild(text);
        var text = document.createTextNode(gender);
        body3.appendChild(text);
        var text = document.createTextNode(age);
        body4.appendChild(text);
        var text = document.createTextNode(condition);
        body5.appendChild(text);

        head.appendChild(body1);
        head.appendChild(body2);
        head.appendChild(body3);
        head.appendChild(body4);
        head.appendChild(body5);

        element.appendChild(head);
    }
};

document.getElementById('SearchText').addEventListener("keypress", function (e) {
    if (e.keyCode == 13) {
        var search_id = document.getElementById('SearchText').value;
        SearchData.id = search_id;

        const url = `${SearchData.url}${SearchData.type}${SearchData.id}`
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send();
        xhr.onload = function () {
            var data = JSON.parse(this.responseText);
            var del = document.getElementById('table_body');
            del.remove();
            var tag = document.getElementById('table_class');
            var table_b = document.createElement('tbody');
            table_b.setAttribute('id', 'table_body');
            tag.appendChild(table_b);
            load_database(data);
        }
    }
});

document.querySelector("#viewBtn").addEventListener("click", () => {
        console.log('hello');
        // myPlaylist.play();
})