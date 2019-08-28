function Button() {
    /* any logic */
      const [count, setCount] = useState(0);
      const setCountEvent = () => setCount(count+1);
    
    /* end of any logic */

    // event can be inline
    // return <button onClick={() => setCount(count+1)}>{count}</button>;

    // declare a var for the function is a better way
      return <button onClick={setCountEvent}>{count}</button>;
  }
  
  ReactDOM.render(<Button />, document.getElementById('mountNode'));
  
  
  