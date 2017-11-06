import React from 'react'
import { Provider } from "react-redux"
import store from "./storage"
// import TopLevelComponent from './screens/StartScreen'
import Routing, { Router } from './routing'

const Route = Routing.Route;


export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    {/* <Route path='/' component={TopLevelComponent}/> */}
                </Router>
            </Provider>
        )
    }
}
