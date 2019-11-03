var express = require('express');
var router = express.Router();
const runnerBusinessLogic = require('./runner-bl');
const fs = require('fs');
const constants = require('./constants');

/* GET runners list. */
function runnersListGetCtrl(req, res, next) {
    console.log(req.session)

    if (req.session.xyz != true) {
        res.redirect('/login');
    } else {

        runnerBusinessLogic.getRunners((e, allRunners) => {
            if (e) {
                console.log(e);
            } else {
                const noFilters = req.body.noFilters;
                const runnerDeleted = req.body.runnerDeleted;
                const noRunnersFound = req.body.noRunnersFound;
                const runnerAdded = req.body.runnerAdded;
                const onFilter = req.body.filteredRunners ? req.body.filteredRunners : allRunners
                let title = '';

                if (noFilters) {
                    title = noFilters;
                } else if (runnerDeleted) {
                    title = runnerDeleted;
                } else if (noRunnersFound) {
                    title = noRunnersFound;
                } else if (runnerAdded) {
                    title = runnerAdded;
                } else {
                    title = '';
                }

                res.render('runner', { kmArray: constants.kmArray, title: title, runnerList: onFilter });
            }
        })
    }
};

/* POST runners list. */
function runnersListPostCtrl(req, res, next) {
    console.log(req.body);
    if (req.body.update) {

    }





    if (req.body.fullList === '') {
        return next();
    } else if (req.body.filter === '') {
        if (req.body.id === '' && req.body.name === '' && (!req.body.km || req.body.km === '')) {
            req.body.noFilters = 'no filter fields was chosen'
            return next();
        } else {
            const selectedFiltersValues = {
                id: req.body.id,
                name: req.body.name.toLowerCase(),
                km: req.body.km
            }
            runnerBusinessLogic.filterRunnersList(selectedFiltersValues, (e, filteredRunners) => {
                if (e) {
                    console.log(e);
                } else {
                    if (filteredRunners.length === 0) {
                        req.body.noRunnersFound = 'No runners found';
                        return next();
                    } else {
                        req.body.filteredRunners = filteredRunners;
                        return next();
                    }
                }
            })
        }
    }
};

/* GET add runner */
function addRunnerGetCtrl(req, res, next) {
    res.render('add-runner', { kmArray: constants.kmArray, title: 'Please fill all fields' });
};

function operationCtrl(req, res, next) {
    const id = req.body.id;
    const operation = req.body.op;

    switch (operation) {
        case 'update':
            res.redirect('/runner/update/' + id);
            break;
        case 'delete':
            deleteRunner(id, () => {
                res.redirect('/runner/list');
            });
            break;
        default:
            res.redirect('/runner/list');
    }

}

function updateCtrl(req, res) {
    const id = req.params.id;
    console.log(req.params);
    runnerBusinessLogic.getRunner(id, function (err, runner) {
        res.render('update-runner', {
            runner: runner,
            kmArray: constants.kmArray
        })
    })
}

function postUpdateCtrl(req, res) {
    const data = req.body;
    console.log(data);
    res.redirect('/runner/list')
}

/* POST add runner */
function addRunnerPostCtrl(req, res, next) {
    if (req.body.id !== '' && req.body.name !== '' && req.body.km !== '') {
        const addedRunner = {
            id: req.body.id,
            name: req.body.name.toLowerCase(),
            km: req.body.km
        };
        runnerBusinessLogic.createRunner(addedRunner, (e) => {
            if (e) {
                console.log(e);
            }
            else {
                req.body.runnerAdded = 'Runner has been added';
                return next();
            }
        });
    } else {
        res.render('add-runner', { title: `All details must be filled` });
    }
}

function deleteRunner(runnerId, callback) {
    runnerBusinessLogic.deleteRunner(runnerId, (e) => {
        if (e) {
            console.log(e);
        } else {
            callback();
        }
    })
}

router.get('/list', runnersListGetCtrl);
router.post('/list', runnersListPostCtrl, runnersListGetCtrl);
router.get('/add', addRunnerGetCtrl);
router.post('/operation', operationCtrl);
router.get('/update/:id', updateCtrl);
router.post('/update', postUpdateCtrl);

module.exports = router;