import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import MenuSvg from "../assets/apps.svg";

const Header = () => {
  const router = useRouter();
  const handleClick = (href) => {
    router.push(href);
  };
  return (
    <Container>
      <Logo onClick={() => handleClick("/")}>OE</Logo>
      <NavContainer>
        <NavItem onClick={() => handleClick("./login")}>로그인</NavItem>
        <NavItem>
          <MenuSvg />
        </NavItem>
      </NavContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: NotoSansKR-Regular;
  font-size: 1rem;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const Logo = styled.div`
  display: flex;
  font-family: NotoSansKR-Bold;
  font-size: 1.5rem;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavItem = styled.div`
  padding-left: 1rem;
  font-size: 0.8rem;
`;
export default Header;
