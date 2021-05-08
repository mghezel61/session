import React from "react";

const ApprovalCardText = (props) => {
  console.log(props);
  return (
  <React.Fragment>
    <div className="card">
    <div className="content">
      <img
        className="right floated mini ui image"
        src={props.img}
        alt="avatar"
      />
      <div className="header">{props.name}</div>
      <div className="meta">Friends of Veronika</div>
      <div className="description">{props.text}</div>
    </div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Decline</div>
        </div>
      </div>
    </div>
  </React.Fragment>
  );
};

export default ApprovalCardText;
