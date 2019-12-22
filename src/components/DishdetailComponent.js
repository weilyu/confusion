import React from "react";
import { CardImg, CardBody, CardTitle, Card, CardText } from "reactstrap";

const Dishdetail = ({ dish }) => {
    if (dish == null) {
        return <div></div>;
    }
    return (
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                <RenderDish dish={dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
                <RenderComments comments={dish.comments} />
            </div>
        </div >
    );
};

const RenderComments = ({ comments }) => {
    const cmt_disp = comments.map(cmt => {
        const dateOptions = { year: 'numeric', month: 'short', day: '2-digit' };
        const date_str = (new Date(cmt.date)).toLocaleDateString('en-US', dateOptions);
        return (
            <li>
                <p>{cmt.comment}</p>
                <p>-- {cmt.author} , {date_str}</p>
            </li>
        );
    });
    return (
        <div>
            <h4>Comments</h4>
            <ul className="list-unstyled">{cmt_disp}</ul>
        </div>
    );
};

const RenderDish = ({ dish }) => {
    return <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
        </CardBody>
    </Card>;
};

export default Dishdetail;