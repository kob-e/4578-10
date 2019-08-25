async function main() {
   
    const v1 = await mainHelper(4500, false);
    console.log(v1);

    const p1 = mainHelper(3000, false);
    const p2 = mainHelper(5000, false);
    const p3 = mainHelper(1000, false);

    // when all resolved
    return Promise.all([p1, p2, p3]);
}

main().then(res => {
    console.log(res);
});;
/**
 * 
 * @param {*} ms 
 * @param {*} canHaveError true or false
 */
function mainHelper(ms, canHaveError) {
    return new Promise((resolve, reject) => {
        const rand = Math.ceil(Math.random() * 2);
        setTimeout(() => {
            console.log('hello');
            if (rand % 2 == 1 && canHaveError)
                reject();
            else{
                resolve(
                    
                );
            }
            
               
        }, ms);
    });
}