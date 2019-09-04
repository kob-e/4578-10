let model = {
    time: 1,
    running: true
  }
  
  const updater = (model, action) => {
    const updates = {
      TICK: (model) => Object.assign(model, {time: model.time + (model.running ? 1 : 0)}),
      START: (model) => Object.assign(model, {running: true}),
      STOP: (model) => Object.assign(model, {running: false}) 
    }
    
    return updates[action](model);
  }
  
  const actions = {
    TICK: 'TICK',
    START: 'START',
    STOP: 'STOP'
  }
  
  function View(m) {
    const minutes = Math.floor(m.time / 60);
    const seconds = m.time % 60;
    const formattedSecond = `${seconds < 10 ? '0': '' }${seconds}`;
    
    const handler = () => {
      model = updater(model, m.running ? 'STOP' : 'START');
    }
    
    
    return <>
      <div>{minutes}:{formattedSecond}</div>
      <button onClick={handler}>{m.running ? 'Stop' : 'Start'}</button>
      </>
  }
  
  const render = () => ReactDOM.render(View(model), document.getElementById('mountNode'));
  
  
  setInterval(() => {
    model = updater(model, actions.TICK);
    render();
  }, 1000)
  
  