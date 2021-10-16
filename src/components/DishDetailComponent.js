import { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";


class DishDetail extends Component {

    renderDish(dish) {
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderDishComments(comments) {
        if (comments == null) {
            return (
                <div></div>
            )
        }
        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                            </li>
                        );
                    }
                    )}
                </ul>
            </div>
        );

    }


    render() {
        if (this.props.dish == null) {
            return (
                <div></div>
            );
        }

        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderDishComments(this.props.dish.comments)}
                </div>

            </div>
        );
    }

}

export default DishDetail;