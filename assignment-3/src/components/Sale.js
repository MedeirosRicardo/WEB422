import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Table } from 'react-bootstrap';

class Sale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sale: {},
            loading: true
        };

        this.itemTotal = this.itemTotal.bind(this);
    }

    // Component didMount
    componentDidMount() {
        fetch(`https://arnin-web422-ass1.herokuapp.com/api/sales/${this.props.id}`)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            // If data existe push id into recentlyViewed
            if (myJson._id) {
                this.props.viewedSale(myJson._id);
            }

            this.setState({
                sale: myJson,
                loading: false
            });
        });
    }

    // Component didUpdate
    componentDidUpdate(prevProps) {
        if (prevProps.id !== this.props.id) {
            this.setState({loading: true});

            fetch(`https://arnin-web422-ass1.herokuapp.com/api/sales/${this.props.id}`)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                // If data existe push id into recentlyViewed
                if (myJson._id) {
                    this.props.viewedSale(myJson._id);
                }

                this.setState({
                    sale: myJson,
                    loading: false
                });
            });
        }
    }

    // Method that calculates the total value of items, sum = price * quantity
    itemTotal(items) {
        let total = 0;
        for (let i = 0; i < items.length; i++) {
            total += items[i].price * items[i].quantity;
        }
        return total;
    }
    
    // Render function
    render() {
        if (this.state.loading) {
            return null; // NOTE: This can be changed to render a <Loading /> Component for a better user experience
        } else {
            if (this.state.sale._id) {
                return (
                    <div>
                        <h1>Sale: {this.state.sale._id}</h1>
                        <h2>Customer</h2>
                        <ListGroup>
                            <ListGroupItem><strong>email:</strong> {this.state.sale.customer.email}</ListGroupItem>
                            <ListGroupItem><strong>age:</strong> {this.state.sale.customer.age}</ListGroupItem>
                            <ListGroupItem><strong>satisfaction:</strong> {this.state.sale.customer.satisfaction} / 5</ListGroupItem>
                        </ListGroup>
                        <h2> Items: ${this.itemTotal(this.state.sale.items).toFixed(2)}</h2>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.sale.items.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.quantity}</td>
                                        <td>${item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>);
            } else {
                return <div><h1>Unable to find Sale</h1><p>id: {this.props.id}</p></div>
            }
        }
    }
}

export default Sale;