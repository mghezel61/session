import React from "react";
import ApprovalCardText from "./components/ApprovalCardText";
import faker from "faker";
import ApprovallCard from "./components/ApprovallCard";

const App = () => {
  return (
    <div className="comments ui container" style={{ marginTop: "10px" }}>
      <ApprovallCard>
        <ApprovalCardText
          img={faker.image.avatar()}
          text={faker.lorem.sentence()}
          name={faker.name.firstName()}
          commentDate="2 days ago"
        />
        <ApprovalCardText
          img={faker.image.avatar()}
          text={faker.lorem.sentence()}
          name={faker.name.firstName()}
          commentDate="1 day ago"
        />
        <ApprovalCardText
          img={faker.image.avatar()}
          text={faker.lorem.sentence()}
          name={faker.name.firstName()}
          commentDate="4 days ago"
        />
        <ApprovalCardText
          img={faker.image.avatar()}
          text={faker.lorem.sentence()}
          name={faker.name.firstName()}
          commentDate="4 days ago"
        />
      </ApprovallCard>
    </div>
  );
};

export default App;
