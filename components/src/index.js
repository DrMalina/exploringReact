import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author={faker.internet.userName()}
          timeAgo="Today at 4:45PM"
          img={faker.image.avatar()}
          content={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.internet.userName()}
          timeAgo="Today at 6:55PM"
          img={faker.image.avatar()}
          content={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.internet.userName()}
          timeAgo="Today at 11:02PM"
          img={faker.image.avatar()}
          content={faker.lorem.sentence()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
