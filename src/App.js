import React, { Suspense , Component} from 'react';
import './App.scss';


import { NavBar } from './components/navbar/navbar.component';
import { Switch, Route } from "react-router-dom";
import { Footer } from './components/footer/footer.component';




class DynamicImport extends Component {
  state = {
    component: null
  }
  componentDidMount () {
    this.props.load()
      .then((component) => {
        this.setState(() => ({
          component: component.default ? component.default : component
        }))
      })
  }
  render() {
    return this.props.children(this.state.component)
  }
}


const Home = (props) => (
  <DynamicImport load= {() => import('./pages/home/home.component')}>
    {(Component) => Component == null ? <div>Loading ...</div>
    : <Component {...props} /> }

  </DynamicImport>
)

const About = (props) => (
  <DynamicImport load= {() => import('./pages/about/about.component')}>
    {(Component) => Component == null ? <div>Loading ...</div>
    : <Component {...props} /> }

  </DynamicImport>
)



function App() {
  return (
    <div className='app'>

      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Switch>
      </Suspense>
      <Footer />
    </div>
    
  );
}

export default App;
