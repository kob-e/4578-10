const promise = fetch('q.json').then(res => res.json()).then((data) => {
    main(data);
}).catch(err => { throw err });


function main(data) {
  console.log(data);
}