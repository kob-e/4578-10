function Form(props) {
    const [voterName, setVoterName] = useState('');

    return <>
        <input onChange={(e => setVoterName(e.target.value) )} />
        <button onClick={() => props.onUserSubmit(voterName)}>Send</button>
    </>
}

function App() {

    return <Form onUserSubmit={(voterName) => {console.log}} />
}