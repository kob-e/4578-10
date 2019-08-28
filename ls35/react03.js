function Button(props) {
    const setCountEvent = () => props.setCountEvent(props.inc);
     return <button onClick={setCountEvent}>+{props.inc}</button>;
 }
 
 function Label(props) {
   return <label>{props.count}</label>;
 }
 
 function Incrementor() {
    /* any logic */
     const [count, setCount] = useState(0);
     const setCountEvent = (i) => setCount(count+i);
   
   /* end of any logic */
   
   return (
     <>
       <div>
         <Button setCountEvent={setCountEvent} inc={1} />
         <Button setCountEvent={setCountEvent} inc={3}/>
         <Button setCountEvent={setCountEvent} inc={5}/>
         <Label count={count} />
       </div><hr />
     </>
   )
 }
 
 function App() {
    return (<>
        <Incrementor />
        <Incrementor />
      </>)
 }
 
 ReactDOM.render(<App />, document.getElementById('mountNode'));
 
 
 