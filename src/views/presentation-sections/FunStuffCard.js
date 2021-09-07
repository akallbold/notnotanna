import React from "react";
import { Link } from "react-router-dom";
import { Card } from "reactstrap";
// import { funStuff } from "data/funStuffData";

function FunStuffCard(props) {
  const { data } = props;
  return (
    <>
      <div className="details-text">{data.title}</div>
      <Card className="card-image">
        <Link to={data.linkWhenClicked}>
          <img alt={data.imgAlt} src={data.img} />
        </Link>
      </Card>
    </>
  );
}

export default FunStuffCard;
