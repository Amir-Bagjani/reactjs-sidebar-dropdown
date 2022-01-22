import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  text-decoration: none;
  color: #e1e9fc;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
  &:hover {
    background-color: #252831;
    border-left: 4px solid #00B489;
  }
`;
const Left = styled.div`
  display: flex;
  font-weight: 600;
  align-items: center;
  gap: 10px;
`;
const SubMenuLink = styled(Link)`
  text-decoration: none;
  color: #e1e9fc;
  height: 35px;
  display: flex;
  align-items: center;
  background-color: rgba(255,255,255,0.02);
  &:hover {
    background-color: #252831;
  }
`;
const SubMenuWrapper = styled.div`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: 1.4rem;
`;

export default function SubMenu({ item }) {
  const [sub, setSub] = useState(false);
  return (
    <>
      <SidebarLink
        to={item.subMenu ? `#` : item.path}
        onClick={() => setSub(!sub)}
      >
        <Left>
          {item.icon}
          <span>{item.title}</span>
        </Left>
        {item.subMenu && sub ? item.iconOpened : item.iconClosed}
      </SidebarLink>
      {item.subMenu &&
        sub &&
        item.subMenu.map((i) => (
          <SubMenuLink to={i.path} key={i.title}>
            <SubMenuWrapper>
              {i.icon}
              {i.title}
            </SubMenuWrapper>
          </SubMenuLink>
        ))}
    </>
  );
}
