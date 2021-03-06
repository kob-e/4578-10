/**
 * 1. make ctor private
 * 2. provide function that returns the class instance
 * 3. save the instance inside the class
 * use `${getInstance}` method to get/create instance of StorageSingleton
 */
class StorageSingleton {
    private static instance: StorageSingleton;
    private constructor() {

   }

    static getInstance(): StorageSingleton {
        if (StorageSingleton.instance == null) {
            StorageSingleton.instance = new StorageSingleton();
        }
        return StorageSingleton.instance;
    }   
}

const s1 = StorageSingleton.getInstance();
const s2 = StorageSingleton.getInstance();

// used mainly for accessing same resource from multiple code chunks.
