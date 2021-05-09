import HomePage from './pages/HomePage'
import TestPage from './pages/TestPage'
import ResultPage from './pages/ResultPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { useState } from 'react'
import './App.css';

function App() {
  const [result, setResult] = useState(false)

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/test">
            <TestPage />
          </Route>
          <Route path="/result">
            <ResultPage result={result} setResult={setResult}/>
          </Route>

          {/* Redirecting non-matches to home */}
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
