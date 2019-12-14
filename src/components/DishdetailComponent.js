import React, { Component } from "react";
import { CardImg, CardBody, CardTitle, Card, CardText } from "reactstrap";

class Dishdetail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const dish = this.props.dish;
        if (dish == null) {
            return <div></div>;
        }
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    Some comments
                </div>
            </div >
        );
    }
}

export default Dishdetail;