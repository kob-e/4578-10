/**
 * 1. make ctor private
 * 2. provide function that returns the class instance
 * 3. save the instance inside the class
 * use `${getInstance}` method to get/create instance of StorageSingleton
 */
class StorageSingleton {
    private items: any[];
    private readonly STORAGE_KEY = 'mystorage';
    private static instance: StorageSingleton;
    private constructor() {
        this.items = JSON.parse(window.localStorage.getItem(this.STORAGE_KEY));

   }

   addItem(item: any) {
    this.items.push(item);
   }

   saveChanges() {
       window.localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.items));
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


s1.addItem({});
s1.addItem({});


s2.addItem({})
s2.saveChanges();
// used mainly for accessing same resource from multiple code chunks.
