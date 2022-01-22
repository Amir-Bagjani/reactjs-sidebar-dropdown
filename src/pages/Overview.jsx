import { useLocation } from "react-router-dom";
import styled from "styled-components"

const OverviewPage = styled.div`
height: calc(100vh - 60px);
color: #777;
display: flex;
align-items: center;
justify-content: center;
font-size: 3rem;
font-weight: 700;
`


export default function Overview() {
    const location = useLocation();
    return (
        <OverviewPage>
            {location.pathname === `/` ? `Overview` : location.pathname}
        </OverviewPage>
    );
}
