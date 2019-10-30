const fs = require('fs');
const fileName = 'runner.txt';

function readOne(id, callback) {

}

function readAll(callback) {
    fs.readFile(fileName, (e, d) => {
        const allRunners = d && d.length > 0 ? JSON.parse(d.toString()) : [];
        allRunners.sort(function (a, b) {
            return a.id - b.id;
        });
        if (e) {
            callback(e);
        } else {
            callback(null, allRunners);
        }
    })
}

function saveOne(addedRunner, callback) {
    fs.readFile(fileName, (e, d) => {
        const runnersArray = d && d.length > 0 ? JSON.parse(d.toString()) : [];
        runnersArray.push(addedRunner);
        fs.writeFile(fileName, JSON.stringify(runnersArray), (e) => {
            if (e) {
                callback('error');
            }
            else {
                callback(null);
            }

        });
    });
}

function updateOne(runnerToUpdate, callback) {

}

function deleteOne(runnerToDelete, callback) {
    fs.readFile(fileName, (e, d) => {
        let allRunners = d && d.length > 0 ? JSON.parse(d.toString()) : [];

        /* IF THE ID IS UNIQUE */
        //allRunners = allRunners.filter(runner => runner.id !== runnerToDelete.id);

        allRunners.map((runner, i) => {
            if (runner.id === runnerToDelete.id && runner.name === runnerToDelete.name && runner.km === runnerToDelete.km) {
                allRunners.splice(i, 1);
            }
        })

        fs.writeFile(fileName, JSON.stringify(allRunners), (e) => {
            if (e) {
                callback(e);
            } else {
                callback(null);
            }
        })
    });
}

module.exports.readAll = readAll;
module.exports.saveOne = saveOne;
module.exports.deleteOne = deleteOne;

