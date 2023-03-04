import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import queryString from "querystring";
import setToken from "../api/setToken";

const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [email, setEmail] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [password, setPassword] = useState("");

  const handleClick = (href) => {
    router.push(href);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios({
      method: "POST",
      url: `/member/v1.0/login`,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: `username=${e.target.username.value}&password=${e.target.password.value}`,
    });
    console.log(res);
    setToken(res.data.access_token, res.data.refresh_token);
    router.push("/");
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  return (
    <Container>
      <Text>로그인</Text>
      <Form onSubmit={submitHandler}>
        <Input
          type="email"
          name="username"
          onChange={emailHandler}
          placeholder="ex)user@google.com"
        />
        <Input
          type="password"
          name="password"
          onChange={passwordHandler}
          placeholder="password"
        />
        <Button type="submit">로그인</Button>
      </Form>
      <SocialContainer>
        <SocialItem>Git</SocialItem>
        <SocialItem>Google</SocialItem>
        <SocialItem>Instagram</SocialItem>
      </SocialContainer>
      <UtillContainer>
        <UtillItem onClick={() => handleClick("./join")}>신규가입</UtillItem>
        <UtillItem>회원찾기</UtillItem>
      </UtillContainer>
    </Container>
  );
};

export default login;

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

const Form = styled.form`
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
const SocialContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 210px;
`;

const SocialItem = styled.div`
  font-size: 0.3rem;
  margin-top: 1rem;
`;

const UtillContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
  font-size: 0.5rem;
`;

const UtillItem = styled.div`
  color: #808080;
`;
