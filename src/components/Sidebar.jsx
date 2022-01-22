import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Close, Menu } from "@material-ui/icons";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { useLocation } from "react-router-dom";

const Nav = styled.div`
  height: 60px;
  background-color: #15171c;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Bar = styled(Link)`
  margin-left: 2rem;
  color: white;
`;
const SidebarNav = styled.nav`
  width: 250px;
  background-color: #15171c;
  position: fixed;
  top: 0;
  left: ${(props) => (props.showSidebar ? 0 : `-100%`)};
  height: 100vh;
  transition: 350ms;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
`;
const SidebarWrapper = styled.div`
  width: 100%;
`;
const CloseSidebar = styled.div`
  margin: 0.5rem 0.5rem 1.5rem 0;
  text-align: end;
  color: white;
  cursor: pointer;
`;

export default function Sidebar() {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(()=>{
    setShowSidebar(false)
  }, [location.pathname])

  return (
    <>
      <Nav>
        <Bar to="#">
          <Menu onClick={() => setShowSidebar(true)} />
        </Bar>
      </Nav>
      <SidebarNav showSidebar={showSidebar}>
        <SidebarWrapper>
          <CloseSidebar>
            <Close onClick={() => setShowSidebar(false)} />
          </CloseSidebar>
          {SidebarData.map((item) => (
            <SubMenu item={item} key={item.id} />
          ))}
        </SidebarWrapper>
      </SidebarNav>
    </>
  );
}
