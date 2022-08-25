import React from "react";
import { FiUserX, FiEdit, FiUserCheck } from "react-icons/fi";
import { FaUserCheck } from "react-icons/fa";

const MemberListItem = ({
  member,
  onToggle,
  onRemove,
  onInsertToggle,
  setSelectedMember,
}) => {
  const { id, checked } = member;
  return (
    <tr>
      {/* <th>{index + 1}</th> */}
      <th></th>
      <td>{member.id}</td>
      <td>{member.이름}</td>
      <td>{member.나이}</td>
      <td>{member.성별}</td>
      <td>{member.거주지}</td>
      <td>{member.연락처}</td>
      <td>{member.이메일}</td>
      <td>{member.가입일}</td>
      <td
        className="cursor-pointer"
        onClick={() => {
          console.log("사람눌림");
          onToggle(id);
        }}
      >
        {checked ? <FaUserCheck /> : <FiUserCheck />}
      </td>
      <td
        className="cursor-pointer"
        onClick={() => {
          onInsertToggle();
          setSelectedMember((prev) => member); //담기만 함
        }}
      >
        <FiEdit />
      </td>
      <td
        className="cursor-pointer"
        onClick={() => {
          onRemove(id);
        }}
      >
        <FiUserX />
      </td>
    </tr>
  );
};

export default MemberListItem;
