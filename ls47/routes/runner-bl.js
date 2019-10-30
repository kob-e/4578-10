const dal = require('./dal');

function getRunner(id) {
    dal.getRunner(id, function (runnerData) {

    })
}

function getRunners(callback) {
    dal.readAll((e, allRunners) => {
        if (e) {
            callback(e);
        } else {
            let kmArray = [];
            allRunners.forEach(runner => {
                kmArray.push(runner.km);
            });
            kmArray = [...new Set(kmArray)];
            kmArray = kmArray.sort((a, b) => a - b);
            callback(null, allRunners, kmArray);
        }
    })
}

function createRunner(addedRunner, callback) {
    dal.saveOne(addedRunner, (e) => {
        if (e) {
            callback(e);
        } else {
            callback(null);
        }
    })
}

function updateRunner(runner) {

}

function deleteRunner(runnerToDelete, callback) {
    dal.deleteOne(runnerToDelete, (e) => {
        if (e) {
            callback(e);
        } else {
            callback(null);
        }
    })
}

function filterRunnersList(selectedFiltersValues, callback) {
    dal.readAll((e, allRunners) => {
        let newArr = [];
        for (let i = 0; i < allRunners.length; i++) {
            if (allRunners[i].id == selectedFiltersValues.id) {
                newArr.push(allRunners[i]);
            } else if (allRunners[i].name == selectedFiltersValues.name) {
                newArr.push(allRunners[i]);
            } else if (allRunners[i].km == selectedFiltersValues.km) {
                newArr.push(allRunners[i]);
            }
        }
        if (e) {
            callback(e);
        } else {
            callback(null, newArr);
        }
    })
}

module.exports.getRunners = getRunners;
module.exports.createRunner = createRunner;
module.exports.filterRunnersList = filterRunnersList;
module.exports.deleteRunner = deleteRunner;
