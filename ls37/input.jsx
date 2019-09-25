function Form(props) {
    const [voterName, setVoterName] = useState('');
    console.log(props.a);
    
    return <>
        <input onChange={(e => setVoterName(e.target.value) )} />
        <button onClick={() => props.onUserSubmit(voterName)}>Send</button>
    </>
}

function App() {

    return <Form a={1} onUserSubmit={(voterName) => {console.log}} />
}