"use strict";
var Note = /** @class */ (function () {
    function Note(c, d, t) {
        this.content = c;
        this.d = d;
        this.t = t;
    }
    return Note;
}());
var ViewManager = /** @class */ (function () {
    function ViewManager() {
    }
    ViewManager.prototype.buildHtml = function (notes) {
        var div = document.getElementById('notes');
        div.innerHTML = '';
        for (var i = 0; i < notes.length; i++) {
            div.innerHTML += "\n                <button onclick='deleteNote(event)' data-i=" + i + ">Delete</button>\n                " + notes[i].content + "<br>\n                " + notes[i].d + "<br>\n                " + notes[i].t + "<br>\n            ";
        }
    };
    return ViewManager;
}());
var MyStorage = /** @class */ (function () {
    function MyStorage() {
        this.key = 'notes';
    }
    MyStorage.prototype.getAll = function () {
        return JSON.parse(window.localStorage.getItem(this.key)) || [];
    };
    MyStorage.prototype.insert = function (n) {
        var items = this.getAll();
        items.push(n);
        window.localStorage.setItem(this.key, JSON.stringify(items));
    };
    MyStorage.prototype.delete = function (i) {
        var items = this.getAll();
        items.splice(i, 1);
        window.localStorage.setItem(this.key, JSON.stringify(items));
    };
    return MyStorage;
}());
function main() {
    var _storage = new MyStorage();
    var notes = _storage.getAll();
    var view = new ViewManager();
    var c = document.getElementById('c');
    view.buildHtml(notes);
    document.getElementById('save').addEventListener('click', function () {
        _storage.insert(new Note(c.value, d.value, t.value));
        view.buildHtml(_storage.getAll());
    });
}
main();
function deleteNote(e) {
    var i = +e.target.dataset.i;
    var _storage = new MyStorage();
    _storage.delete(i);
    var view = new ViewManager();
    view.buildHtml(_storage.getAll());
}
function StorageTest() {
    var _storage = new MyStorage();
    console.log(_storage.getAll());
    _storage.insert(new Note('0', new Date, '22:22'));
    console.log(_storage.getAll());
    _storage.insert(new Note('1', new Date, '22:22'));
    _storage.insert(new Note('2', new Date, '22:22'));
    console.log(_storage.getAll());
    _storage.delete(1);
    console.log(_storage.getAll());
}
