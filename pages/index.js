import styled from "styled-components";
import Interrogation from "./components/assets/interrogation.svg";
import Shop from "./components/assets/shop.svg";
import MenuSvg from "./components/assets/menu.svg";
import Add from "./components/assets/add.svg";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const clickHandler = (url) => {
    router.push(url);
  };
  return (
    <Container>
      <MenuContainer>
        <MenuItem onClick={() => clickHandler("/store")}>
          <Add />
          <Text>업체 신규 등록</Text>
        </MenuItem>
        <MenuItem>
          <Shop />
          <Text>나의 업체 보기 </Text>
        </MenuItem>
        <MenuItem>
          <MenuSvg />
          <Text>주문관리하기 </Text>
        </MenuItem>
        <MenuItem>
          <Interrogation />
          <Text>문의하기</Text>
        </MenuItem>
      </MenuContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-top: 0px;
  margin-top: 0px;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 1rem;
`;

const Text = styled.p`
  padding: 0;
  margin: 0;
  font-family: NotoSansKR-Regular;
  font-size: 0.6rem;
`;
