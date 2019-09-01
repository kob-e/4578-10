const html = function () {
    return `
  <h2>html</h2><input>
  <div>${getTime()}</div>
`};

function App() {
    return (
        <>
            <h2>react</h2>
            <input />
            <div>{getTime()}</div>
        </>
    )
}
function main() {
    ReactDOM.render(<App />, document.getElementById('mountNode'));
    mountNode2.innerHTML = html();
}
setInterval(main, 1000);


function getTime() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    return dateTime;
}