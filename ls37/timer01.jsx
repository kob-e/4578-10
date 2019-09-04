let model = {
    time: 0,
    running: false
  }
  
  const updater = (model, action) => {
    const updates = {
      TICK: (model) => Object.assign(model, {time: model.time + 1}),
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
    return <><div>{m.time}</div><button>Start</button></>
  }
  
  const render = () => ReactDOM.render(View(model), document.getElementById('mountNode'));
  
  
  setInterval(() => {
    model = updater(model, 'TICK');
    render();
  }, 1000)
  
  