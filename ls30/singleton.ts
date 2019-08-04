class StorageSingleton {
    private static _instance: StorageSingleton;

    private constructor() {

    }

    static getInstance(): StorageSingleton {
        if (this._instance == null) {
            this._instance = new StorageSingleton();
        }
        return this._instance;
    }
}


const s1 = StorageSingleton.getInstance();
const s2 = StorageSingleton.getInstance();

// used mainly for accessing same resource from multiple code chunks.