import React from 'react';
import './App.css';
import { Switch, Redirect, Route, BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from "./libs/configureStore";
import { ProtectedRoute } from "./components/protected.route";
import About from "./components/About";
import Other from "./components/Other";

function MainRouter(){
    return(
        <>
            <div className="App">
                <Switch>
                    <Route exact path='/' component={About}></Route>
                    <ProtectedRoute exact path='/other' component={Other}/>
                    <Route path="*" component={() => "404 NOT FOUND"} />
                </Switch>
            </div>
        </>
    )
}

function App() {
    return(

        <Provider store={store}>
            <BrowserRouter>
                <MainRouter />
            </BrowserRouter>
        </Provider>
    )
}

export default App
