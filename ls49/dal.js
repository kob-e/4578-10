const fs = require('fs');
const fileName = 'c:\\Users\\Jbt\\Documents\\GitHub\\4578-10\\ls49\\runner.json';

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

        allRunners = allRunners.filter(r => r.id !== runnerToDelete);

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

