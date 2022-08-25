import React, { useState, useEffect } from "react";
import MemberList from "./MemberList";

const MemberEdit = ({ selectedMember, onUpdate, onInsertToggle }) => {
  const [address, setAddress] = useState(""); //입력을해야하기 때문
  const [phonenumber, setPhonenumber] = useState("");
  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };
  const onChangePhonenumber = (e) => {
    setPhonenumber(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault(); //회원수정눌러도 안꺼짐
    onInsertToggle();
    onUpdate(selectedMember.id, address, phonenumber);
  };
  useEffect(() => {
    setAddress(selectedMember.거주지);
  }, []);

  useEffect(() => {
    setPhonenumber(selectedMember.연락처);
  }, []);

  return (
    <div className="hero flex items-center justify-center min-h-screen absolute top-0">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">사는 곳</span>
              </label>
              <input
                onChange={onChangeAddress}
                value={address}
                placeholder="동까지만 입력"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">연락처</span>
              </label>
              <input
                onChange={onChangePhonenumber}
                value={phonenumber}
                type="text"
                placeholder="전화번호"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-5">
              <button
                type="submit"
                onClick={onSubmit}
                className="btn btn-primary"
              >
                회원 수정
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberEdit;
