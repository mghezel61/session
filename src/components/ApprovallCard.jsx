import React from "react";

const ApprovallCard = (props) => {
  console.log(props);
  return (
    <div className="ui cards">
        {props.children}
    </div>
  );
};

export default ApprovallCard;
