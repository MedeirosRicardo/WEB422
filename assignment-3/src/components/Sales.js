import React from "react";
import { withRouter } from "react-router-dom";
import { Table, Pagination } from "react-bootstrap";

class Sales extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sales: [],
            currentPage: 1
        }
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
    
    
    // Next Page
    
    
    render() {
        console.log(this.state.sales)
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
                            {/* TODO: Loop through the sales in the state and display their data. HINT: for the Sale date, the following
                           code can be used: new Date(sale.saleDate).toLocaleDateString() */}
            </tbody>
                    </Table>
                    <Pagination>
                        <Pagination.Prev /* TODO: invoke prevPage when this is clicked */ />
            <Pagination.Item>{/* TODO: show the value of the currentPage */}</Pagination.Item>
                        <Pagination.Next /* TODO: invoke nextPage when this is clicked */ />
            </Pagination>
                </div>
            );
        } else {
            return null; // NOTE: This can be changed to render a <Loading /> Component for a better user experience
        }
    }
}

export default withRouter(Sales);