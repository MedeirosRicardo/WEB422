import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Table, Pagination } from "react-bootstrap";

class Sales extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sales: [],
            currentPage: 1
        };
        this.previousPage = this.previousPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }

    // Utility method implementation
    getData(page) {
        fetch(`https://arnin-web422-ass1.herokuapp.com/api/sales?page=${page}&perPage=10`)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            this.setState({sales: myJson});
        });
    }
    
    
    // Component DidMount
    componentDidMount() {
        this.setState(this.getData(this.state.currentPage));
    }
    
    // Previous Page
    previousPage() {
        if (this.state.currentPage > 1) {
            this.getData(this.state.currentPage - 1);
            this.setState({currentPage: this.state.currentPage - 1});
        }
    }
    
    // Next Page
    nextPage() {
        this.getData(this.state.currentPage + 1);
        this.setState({currentPage: this.state.currentPage + 1});
    }
    
    // Render function
    render() {
        if (this.state.sales.length > 0) {
            return (
                <div>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>Customer</th>
                                <th>Store Location</th>
                                <th>Number of Items</th>
                                <th>Sale Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.sales.map((sales) => (
                                <tr key={sales._id} onClick={() => {this.props.history.push(`/Sale/${sales._id}`)}}>
                                    <td>{sales.customer.email}</td>
                                    <td>{sales.storeLocation}</td>
                                    <td>{sales.items.length}</td>
                                    <td>{new Date(sales.saleDate).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Pagination>
                        <Pagination.Prev onClick={this.previousPage} />
                        <Pagination.Item>{this.state.currentPage}</Pagination.Item>
                        <Pagination.Next onClick={this.nextPage} />
                    </Pagination>
                </div>
            );
        } else {
            return null; // NOTE: This can be changed to render a <Loading /> Component for a better user experience
        }
    }
}

export default withRouter(Sales);