import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Cards from './components/cards/Cards';
import SwipeButtons from './components/swipe-buttons/SwipeButtons';

function App() {
	return (
		<div className="app">
			<Header />
			<Cards />
			<SwipeButtons />
		</div>
	);
}

export default App;
