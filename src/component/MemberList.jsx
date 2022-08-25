import React from "react";
import MemberListItem from "./MemberListItem";
import "./MemberList.css";

const MemberList = ({
  members,
  onToggle,
  onRemove,
  onInsertToggle,
  setSelectedMember,
}) => {
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
          onRemove={onRemove}
          onInsertToggle={onInsertToggle}
          setSelectedMember={setSelectedMember}
        />
      ))}
    </tbody>
  );
};

export default MemberList;
