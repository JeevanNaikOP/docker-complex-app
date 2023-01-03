import React, { Component } from 'react';
import axios from 'axios';

class Fib extends Component {
	state = {
		seenIndexes: [],
		value: {},
		index: ''
};

componentDidMount() {
	this.fetchValues();
	this.fetchIndexes();
}

async fetchValues() {
	const values = await axios.get('/api/value/current');
	this.setState({ values: values.data });
}
async fetchIndexes() {
	const seenIndexes = await axios.get('/api/value/all');
	this.setState({ seenIndexes: seenIndexes.data });
}
}


