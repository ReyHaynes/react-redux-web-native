import React from 'react'
import { Provider } from "react-redux"
import store, { persistor } from "./storage"
import { PersistGate } from 'redux-persist/es/integration/react'
import { Router, Route } from './routing'

import StartScreen from './screens/StartScreen'

export default class App extends React.Component {
    render() {
        return (
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <Router>
                <Route path='/' component={StartScreen}/>
              </Router>
            </PersistGate>
          </Provider>
        )
    }
}
