import logo from './logo.svg';
import './App.css';
import React from "react";
import {Route, withRouter} from "react-router-dom";
import Switch from "react-bootstrap/Switch";
import {Button} from "@material-ui/core";
import GiraffeStore from "./GiraffeStore";
import {observer} from "mobx-react-lite";


const giraffeStore = new GiraffeStore();

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React now
                </a>
                <Switch>
                    <Route path={"/about/:text"} component={About}/>
                    <Route exact path={"/"} render={()=><h1>Startside</h1>}/>
                </Switch>

                <ul>
                    {giraffeStore.giraffes.map((giraffeName,key)=>
                        <li key={key}>{giraffeName}</li>
                    )}
                </ul>

                <Button onClick={()=>giraffeStore.giraffes.push("Elmer")}>Tilføj giraf</Button>
            </header>

        </div>

    );

}

const About = withRouter(({history,match})=>{
    console.log(history);
    console.log(match);
    return <div><h1>About {match.params.text}</h1>
        <Button onClick={()=>history.push("/")}>Go to front</Button>
    </div>
});


export default observer(App);
