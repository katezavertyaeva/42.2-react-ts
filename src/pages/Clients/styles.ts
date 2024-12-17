import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ClientsPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 20px;
  font-size: 30px;
  `

export const Title = styled.div`
   font-weight: bold;
   font-size: 36px;
  `

export const StyledLink = styled(Link)`
 text-decoration: none;
`