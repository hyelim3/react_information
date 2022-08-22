import { useState, useEffect } from "react";
import axios from "axios";
import MemberList from "./component/MemberList";

function App() {
  const [error, setError] = useState(null);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url: `http://localhost:4000/member`,
          method: "GET",
        });
        setMembers(data.data);
      } catch (e) {
        setError(e);
      }
    };
    getData();
  }, []);

  const onToggle = async (id) => {
    try {
      const data = await axios({
        url: `http://localhost:4000/members/check/${id}`,
        method: "PATCH",
      });
      setMembers(data.data);
    } catch (e) {
      setError(e);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th>id</th>
            <th>이름</th>
            <th>나이</th>
            <th>성별</th>
            <th>거주지</th>
            <th>연락처</th>
            <th>이메일</th>
            <th>가입일</th>
          </tr>
        </thead>
        <MemberList members={members} onToggle={onToggle} />
      </table>
    </div>
  );
}

export default App;
