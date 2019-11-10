## add middleware
```javascript
    // check valid token
    app.use(function (req, res, next) {
        // if client requestd for new token, skip
        const q = req.query;
        // fetch token from query - check if exist in our file db
        // set counter++ on the token object
        next();
    });
```



in token business logic add
```javascript
function setCount(token) {

}
```