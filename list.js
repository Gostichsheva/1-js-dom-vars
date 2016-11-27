"use strict";

var fragment = document.createDocumentFragment();
var ul = document.createElement("ul");
var names = [{
    name: "Вася",
    sex: "male"
}, {
    name: "Дима",
    sex: "male"
}, {
    name: "Катя",
    sex: "female"
}, {
    name: "Маша",
    sex: "female"
}, {
    name: "Сережа",
    sex: "male"
}, {
    name: "Оля",
    sex: "female"
}, {
    name: "Паша",
    sex: "male"
}];
var jobs = ["Слесарь", "Менеджер", "Премьер Министр"];
var female = ["Катя", "Маша", "Оля"];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setLiStyle(obj, li) {
    if (obj.salary.value > 50 && obj.salary.value < 80) {
        li.style.background = "yellow";
    }
    else if (obj.salary.value < 50) {
        li.style.background = "red";
    }
    else {
        li.style.background = "green";
    }

    if (obj.job.value === "Премьер Министр") {
        li.style.textDecoration = "underline";
    }

    if (obj.sex === "female") {
        li.style.fontSize = "150%";
    }
}

for (var i = 0; i < 10; i++) {
    var human = names[getRandom(0, names.length - 1)];
    var obj = {
            name: {
                value: human.name,
                title: "ФИО"
            },
            sex: human.sex,
            age: {
                value: getRandom(20, 35),
                title: "Возраст"
            },
            job: {
                value: jobs[getRandom(0, jobs.length - 1)],
                title: "Профессия"
            },
            salary: {
                value: getRandom(20, 120),
                title: "Зарплата"
            },
        },
        li = document.createElement("li");

    for (var key in obj) {
        if (key === "sex") continue;
        var div = document.createElement("div");
        if (key === "name" && obj.age.value > 20 && obj.age.value < 27) {
            div.style.fontWeight = "bold";
        }
        div.innerHTML = obj[key].title + ": " + obj[key].value;
        li.appendChild(div);
    }

    setLiStyle(obj, li);
    fragment.appendChild(li);
}
ul.appendChild(fragment);
document.body.appendChild(ul);
