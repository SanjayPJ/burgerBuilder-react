import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

function App() {
  return (
  	<Layout>
  		<div className="App">
	        <BurgerBuilder />
	    </div>
  	</Layout>
  );
}

export default App;
