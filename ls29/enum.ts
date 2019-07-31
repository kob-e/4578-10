enum QuestionType {
    SHORT = 1,
    MULTIPLE,
    BOTH
} 

class TestEnum {
    private type: QuestionType;

    constructor(type: QuestionType) {
        this.type = type;
    }

    check(type: QuestionType) {
        switch (type) {
            case QuestionType.SHORT: {
                break;
            }
            case QuestionType.MULTIPLE: {
        
                break;
            }
            case QuestionType.BOTH: {
                break;
            }
        }
    }
}

const t1 = new TestEnum(QuestionType.MULTIPLE);

t1.check(QuestionType.MULTIPLE);

