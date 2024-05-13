import {Switch, Route} from 'react-router-dom'

import Home from './components/Home/index'
import About from './components/About/index'
import NotFound from './components/NotFound/index'
import Header from './components/Header/index'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
