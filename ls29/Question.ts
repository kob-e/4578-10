abstract class Question {
    private qText: string;

    constructor(qText: string) {
        this.setQText(qText);
    }

    setQText(qText: string) {
        this.qText = qText;
    }

    toString() {
        return this.qText;
    }

    public abstract getCorrectAnswer(): string;
    public abstract addCorrectAnswer(answer: string): void;

}

class ShortAnswerQuestion extends Question {

    answer: string;

    constructor(qText: string, answer: string) {
        super(qText);
        this.answer = answer;
    }

    /// @override
    public getCorrectAnswer(): string {
        return this.answer;
    }
    public addCorrectAnswer(answer: string): void {
        this.answer = answer;
    }
}

class MultipleChoiceQuestion extends Question {
    private MAX_ANSWERS: number = 6;
    answers: string[];
    numberOfAnswers: number;
    correctAnswerIndex: number;

    constructor(qText: string, correctAnswer: string) {
        super(qText);
        this.answers = [correctAnswer];
        this.correctAnswerIndex = 0;
        this.numberOfAnswers = this.answers.length;
    }

    toString() {
        return super.toString() + '\n' + this.answers.join('\n');
    }

    public getCorrectAnswer(): string {
        return this.answers[this.correctAnswerIndex];
    }
    public addCorrectAnswer(answer: string): void {
        if (this.numberOfAnswers < this.MAX_ANSWERS) {
            this.numberOfAnswers = this.answers.push(answer);
            this.correctAnswerIndex = this.numberOfAnswers - 1;
        }
    }

    public addAnswer(answer: string): void {
        if (this.numberOfAnswers < this.MAX_ANSWERS) {
            this.numberOfAnswers = this.answers.push(answer);
        }
    }

}

class QuestionsCatalog {
    private MAX_QUESTIONS: number = 20;
    private numberOfQuestions: number;
    private questions: Question[];
    // public static final int SHORT = 1, MULTIPLE = 2, BOTH = 3;

    constructor() {
        this.questions = [];
        this.numberOfQuestions = 0;
    }

    public addQuestion(q: Question): void {
        if (this.questions.length < this.MAX_QUESTIONS) {
            this.numberOfQuestions = this.questions.push(q);
        }
    }

    public generateQuestionnaire(num: number, type: number): Question[] {
        debugger;
        const _questions: Question[] = [];
        const tempQuestions: Question[] = [];
        for (let i = 0; i < this.questions.length; i++) {
            tempQuestions.push(this.questions[i]);
        }

        while (_questions.length < num && tempQuestions.length > 0) {
            const _random = this.random(tempQuestions.length);
            const answer = tempQuestions.splice(_random, 1)[0];
            switch (type) {
                case 1: {
                    if (answer instanceof ShortAnswerQuestion) {
                        _questions.push(answer);
                    }
                    break;
                }
                case 2: {
                    if (answer instanceof MultipleChoiceQuestion) {
                        _questions.push(answer);
                    }
                    break;
                }
                case 3: {
                    _questions.push(answer);
                    break;
                }
            }
        }

        return _questions;
    }

    /// random between 0 to x - [0, x)
    private random(x) {
        return Math.floor(Math.random() * x);
    }
}

class Questionnaire {
    private questionsCatalog: Question[];
    private correctAnswerCount: number;
    private _currentQustion: Question;

    // dependency injection - cat
    constructor(type: number, num: number, cat: QuestionsCatalog) {
        this.questionsCatalog = cat.generateQuestionnaire(num, type);
        this.correctAnswerCount = 0;
    }

    public hasNext(): boolean {
        return this.questionsCatalog.length > 0;
    }

    public getNext(): Question {
        this._currentQustion = this.questionsCatalog.splice(0, 1)[0];
        return this._currentQustion;
    }

    public checkAnswer(answer: string): void {
        if (this._currentQustion.getCorrectAnswer() === answer) {
            this.correctAnswerCount++;
        }
    }

    public getTotalQuestions(): number {
        return this.questionsCatalog.length;
    }

    public getCorrectAnswers(): number {
        return this.correctAnswerCount;
    }
}

function main() {
    const cat: QuestionsCatalog = new QuestionsCatalog();
    const q1: ShortAnswerQuestion = new ShortAnswerQuestion("How much legs does the spider have?", "8");
    cat.addQuestion(q1);
    const q2: MultipleChoiceQuestion = new MultipleChoiceQuestion("Where is the sun rise?", "East");
    q2.addAnswer("West");
    q2.addAnswer("North");
    q2.addAnswer("South");
    cat.addQuestion(q2);
    // add more questions to the catalog

    // Catalog.BOTH
    const qnr: Questionnaire = new Questionnaire(3, 5, cat);
    console.log("Welcome to our questionnaire, its starts now!");
    while (qnr.hasNext()) {
        const q: Question = qnr.getNext();
        console.log(q);
        console.log("Your answer: ");
        const answer: string = 'East';
        qnr.checkAnswer(answer);
    }
    console.log("Thank you for participating in our test");
    const correct: number = qnr.getCorrectAnswers();
    const total: number = qnr.getTotalQuestions();
    console.log("You've answered " + correct + " correct answers out of " +
        total + " questions");

}
main();