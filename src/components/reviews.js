import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
const env = process.env;

class Reviews extends Component {
    constructor(props){
        super(props);

        this.state = {
            review: '',
            rating: 0
        };
    }

    handleSubmit(movieId, review) {
        const {dispatch} = this.props;
        //const { review, rating } = this.state;
        dispatch(saveReview(movieId, review));
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="review">
                    <Form.Label>Review</Form.Label>
                    <Form.Control
                        onChange={this.handleInputChange}
                        value={this.state.review}
                        type="text"
                        placeholder="Review"
                    />
                </Form.Group>

                <Form.Group controlId="rating">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control
                        onChange={this.handleInputChange}
                        value={this.state.review}
                        type="number"
                        placeholder="3"
                        min="0"
                        max="5"
                    />
                </Form.Group>

                <Button type="submitButton" onClick={this.handleSubmit}>Submit Review</Button>
            </Form>
        );
    }
}

export default connect(mapStateToProps)(Reviews);