import React from "react";

const MemberListItem = ({ member, index }) => {
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
    </tr>
  );
};

export default MemberListItem;