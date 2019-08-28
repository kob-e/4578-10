// simple textual components
function MainText() {
    return <div>main app</div>;
  }
  
  function Menu() {
    return <nav>menu</nav>;
  }
  
  function App() {
    return (
      <>
        <Menu />
        <MainText />
      </>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById('mountNode'));
    