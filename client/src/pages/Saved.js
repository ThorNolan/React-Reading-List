import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import API from "../utils/API";

class Saved extends Component {
  state = {
    books: []
  };

  // Utilize our API to get saved books from the database
  getSavedBooks = () => {
    API.getSaved()
      .then(res => this.setState({books: res.data}))
      .catch(err => console.log(err))
  };  

  // Run the get saved books function when component mounts
  componentDidMount() {
    this.getSavedBooks();
  };

  // Method to delete a book from the database through the delete route on the API page
  deleteBook = event => {
    API.deleteBook(event.target.id)
      .then(res => this.getSavedBooks())
      .catch(err => console.log(err))
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
                <h1>Google Books Librarian, at Your Service</h1>
                
                <h5>Your Saved Books:</h5>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <Card
              books={this.state.books}
              buttonAction={this.deleteBook}
              buttonType="btn btn-danger mt-2"
              buttonText="Delete Book"
            />
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/" className="mx-auto">← Back to Search</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
