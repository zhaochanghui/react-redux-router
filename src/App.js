import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Home  from './page/index.js';
import Contact  from './page/contact/index.js';
import About from './page/about/index.js';
import CounterReactRedux  from './components/counter/CounterReactRedux.js';
import ReduxTest from './components/ReactAndRedux.js';


class App extends Component {
	render() {
		return(
			<Home>
	   			 <Route path="/about" component={About} />
	   			 <Route path='/contact' component={Contact} />
	   			 <Route path='/counter' component={CounterReactRedux} />
	   			 <Route path='/redux' component={ReduxTest} />
			</Home>	
			);
	}
}

export default App