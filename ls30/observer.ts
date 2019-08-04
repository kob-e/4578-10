interface Subject {
    notify(u: User);
}

class EmailSubject implements Subject {
    notify(u: User) {
        console.log('mail sent');
    }
}

class SmsSubject implements Subject {
    notify(u: User) {
        console.log('SMS sent');
    }
}

class FaxSubject implements Subject {
    notify(u: User) {
        console.log('Fax sent');
    }
}

class PushSubject implements Subject{
    notify() {
        console.log('Push sent');
    }

}
class User {
    private phone;
    private email;
    private fax;
    constructor(phone: string, email: string, fax: string) {
        this.email = email;
        this.fax = fax;
        this.phone = phone;
    }
}

class Observer {
    private _subjects: Subject[];
    private _user: User;
    constructor(u: User) {
        this._user = u;
        this._subjects = [];
    }

    attach(s: Subject) {
        this._subjects.push(s);
    }
    
    detach() {

    }

    notifyAll() {
        for(let i=0; i < this._subjects.length; i++) {
            this._subjects[i].notify(this._user);
        }
    }
}

const user1 = new User('054-444444', '234@dfg.com', '02-34534');
const u1 = new Observer(user1);
u1.attach(new SmsSubject());
u1.attach(new FaxSubject());
u1.attach(new PushSubject());

u1.notifyAll();