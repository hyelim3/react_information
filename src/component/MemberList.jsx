import React from "react";
import MemberListItem from "./MemberListItem";

const MemberList = ({ members, onToggle }) => {
  //members를 받아야함
  return (
    <tbody className="MemberList">
      {/* thead 밑에 tbody */}
      {members.map((member, index) => (
        <MemberListItem
          member={member}
          key={index}
          index={index}
          onToggle={onToggle}
        />
      ))}
    </tbody>
  );
};

export default MemberList;
