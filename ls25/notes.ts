class Note {
    content: string;
    d: Date;
    t: string;

    constructor(c: string, d: Date, t: string) {
        this.content = c;
        this.d = d;
        this.t = t;
    }
}
class ViewManager {
    buildHtml(notes: Note[]) {
        const div = document.getElementById('notes');
        div.innerHTML = '';
        for(let i=0; i < notes.length; i++) {
            div.innerHTML += `
                <button onclick='deleteNote(event)' data-i=${i}>Delete</button>
                ${notes[i].content}<br>
                ${notes[i].d}<br>
                ${notes[i].t}<br>
            `;
        }
    }
}

class MyStorage {
    key: string;

    constructor() {
        this.key = 'notes';
    }

    getAll(): Note[] {
        return JSON.parse(window.localStorage.getItem(this.key)) || [];
    }

    insert(n: Note): void {
        const items = this.getAll();
        items.push(n);
        window.localStorage.setItem(this.key, JSON.stringify(items));
    }

    delete(i: number): void {
        const items = this.getAll();
        items.splice(i, 1);
        window.localStorage.setItem(this.key, JSON.stringify(items));
    }
}

function main() {
    const _storage = new MyStorage();
    const notes = _storage.getAll();
    const view = new ViewManager();
    
    const c = document.getElementById('c');
    view.buildHtml(notes);

    document.getElementById('save').addEventListener('click', function() {
        _storage.insert(new Note((<HTMLInputElement>c).value, d.value, t.value));
        view.buildHtml(_storage.getAll());
    })
}
main();
function deleteNote(e) {
    
    const i = +e.target.dataset.i;
    const _storage = new MyStorage();
    _storage.delete(i);
    const view = new ViewManager();
    view.buildHtml(_storage.getAll());
}

function StorageTest() {
    const _storage = new MyStorage();
    console.log(_storage.getAll());
    _storage.insert(new Note('0', new Date, '22:22'));
    console.log(_storage.getAll());
    _storage.insert(new Note('1', new Date, '22:22'));
    _storage.insert(new Note('2', new Date, '22:22'));
    console.log(_storage.getAll());
    _storage.delete(1);
    console.log(_storage.getAll());
}
