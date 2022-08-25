import { useState, useEffect } from "react";
import axios from "axios";
import MemberList from "./component/MemberList";
import MemberEdit from "./component/MemberEdit";
import InformationHead from "./component/InformationHead";

function App() {
  const [error, setError] = useState(null);
  const [members, setMembers] = useState([]);
  const [InsertToggle, setInsertToggle] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null); //선택된 할일

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

  const onRemove = async (id) => {
    try {
      await axios({
        url: `http://localhost:4000/members/check/${id}`,
        method: "DELETE",
      });
      const data = await axios({
        url: `http://localhost:4000/member`,
        method: "GET",
      });
      setMembers(data.data);
    } catch (e) {
      setError(e);
    }
  };

  const onInsertToggle = () => {
    //끄고 켜기만 해주면 됨
    setInsertToggle((prev) => !prev);
  };

  const onUpdate = async (id, 거주지, 연락처) => {
    console.log("id", id);
    console.log("거주지", 거주지);
    console.log("연락처", 연락처);
    try {
      const data = await axios({
        url: `http://localhost:4000/members/${id}`,
        method: "PATCH",
        data: {
          거주지,
          연락처,
        },
      });
      setMembers(data.data);
    } catch (e) {
      setError(e);
    }
  };

  return (
    <>
      <div className="overflow-x-auto relative h-screen">
        <InformationHead />
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
              <th>출석</th>
              <th>수정</th>
              <th>삭제</th>
            </tr>
          </thead>
          <MemberList
            members={members}
            onToggle={onToggle}
            onRemove={onRemove}
            onInsertToggle={onInsertToggle}
            setSelectedMember={setSelectedMember}
          />
        </table>
        {InsertToggle && ( //수정버튼 누를 때 수정하기 나오게 하겠다 둘다 참일 때
          <MemberEdit
            onUpdate={onUpdate}
            onInsertToggle={onInsertToggle}
            selectedMember={selectedMember}
          />
        )}
      </div>
    </>
  );
}

export default App;
