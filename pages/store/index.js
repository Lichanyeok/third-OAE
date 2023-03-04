import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const store = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [category, setCategory] = useState();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [name, setName] = useState();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [contact, setcontact] = useState();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [address, setaddress] = useState();

  const categoryChangeHandler = (e) => {
    setCategory(e.target.value);
  };
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const contactChangeHandler = (e) => {
    setcontact(e.target.value);
  };
  const addressChangeHandler = (e) => {
    setaddress(e.target.value);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    const ob = {
      category: category,
      name: name,
      contact: contact,
      address: address,
    };
    const data = JSON.stringify(ob);
    postData(data);
  };
  const postData = async (data) => {
    console.log(data);
    const res = await axios({
      method: "POST",
      url: "/api/store/v1.0/register",
      headers: { "Content-Type": "application/json" },
      data: data,
    });
  };
  return (
    <>
      <Container>
        <Text>업체를 등록하세요</Text>
        <InputContainer>
          <Input
            placeholder="카테고리"
            name="category"
            onChange={categoryChangeHandler}
          ></Input>
          <Input
            placeholder="가게명"
            name="name"
            onChange={nameChangeHandler}
          ></Input>
          <Input
            placeholder="가게번호"
            name="contact"
            onChange={contactChangeHandler}
          ></Input>
          <Input
            placeholder="주소"
            name="address"
            onChange={addressChangeHandler}
          ></Input>
        </InputContainer>
        <Button onClick={clickHandler}>등록</Button>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  height: 200px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: NotoSansKR-Regular;
  font-size: 1rem;
`;

const Text = styled.p`
  font-family: NotoSansKR-Bold;
  font-size: 0.6rem;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  width: 19rem;
  outline: none;
  border: 0;
  border-radius: 100px;
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  font-family: NotoSansKR-Regular;
  font-size: 0.8rem;
  ::place-holder {
    color: light-gray;
  }
`;

const Button = styled.button`
  border: 0;
  border-radius: 100px;
  width: 19rem;
  padding: 0.5rem;
  margin-top: 0.5rem;
  background-color: #ec6090;
  font-family: NotoSansKR-Bold;
  color: white;
`;
export default store;
