import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Table } from 'react-bootstrap';

class Sale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sale: {},
            loading: true
        };
    }

    // Component DidMount
    componentDidMount() {
        fetch(`https://arnin-web422-ass1.herokuapp.com/api/sales/${this.props.id}`)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            this.setState({sale: myJson});
            this.props.viewedSale(myJson._id)
        });
    }
    
    // Render function
    render() {
        return <div><h1>Sale id: id</h1></div>
    }
}

export default Sale;