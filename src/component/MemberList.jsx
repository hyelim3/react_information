import React from "react";
import MemberListItem from "./MemberListItem";

const MemberList = ({ members }) => {
  //members를 받아야함
  return (
    <tbody className="MemberList">
      {/* thead 밑에 tbody */}
      {members.map((member, index) => (
        <MemberListItem member={member} key={index} index={index} />
      ))}

      {/* {members.map((member, index) => {
        return <MemberListItem member={member} key={index} />;
      })} */}
    </tbody>
  );
};

export default MemberList;
