import axios from "axios";
import { useRouter } from "next/router";
import { use, useState } from "react";
import styled from "styled-components";

const Join = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [validation, setValidation] = useState(false);
  const router = useRouter();
  const dataPost = async (ob) => {
    console.log(ob);
    try {
      const res = await axios({
        method: "POST",
        url: `/member/v1.0/join`,
        headers: { "Content-Type": "application/json" },
        data: ob,
      })
        .then(router.push("/"))
        .console.log(res);
    } catch (err) {
      throw Error("회원가입실패");
    }
  };

  const clickHandler = (e) => {
    e.preventDefault();
    let ob = JSON.stringify({
      email: email,
      password: password,
    });
    dataPost(ob);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  return (
    <Container>
      <Text>회원가입</Text>
      <InputContainer>
        <Input
          type="email"
          placeholder="ex)user@google.com"
          onChange={emailHandler}
        />
        <Input
          type="password"
          placeholder="password"
          onChange={passwordHandler}
        />
        <Input type="password" placeholder="re-password" />
        <Button onClick={clickHandler}>회원가입</Button>
      </InputContainer>
    </Container>
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
  font-size: 3rem;
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

export default Join;
