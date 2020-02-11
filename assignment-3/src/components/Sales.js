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
        fetch(`https://arnin-web422-ass1.herokuapp.com/api/sales?page=${this.state.currentPage}&perPage=${this.state.perPage}`)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            this.setState({
                sales: myJson.data,
                currentPage: page,
                perPage: 10
            });
        });
    }

    // Component DidMount
    componentDidMount() {
        this.data = () => {
            this.setState({
                sales: this.getData(this.state.currentPage)
            });
        }
    }

    // Previous Page


    // Next Page


    render() {
        return <div><h1>Sales</h1></div>
    }
}

export default withRouter(Sales);