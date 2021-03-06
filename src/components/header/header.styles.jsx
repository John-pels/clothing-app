import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainerResponsive = css`
  @media (max-width: 767px) {
    flex-flow: row wrap;
    justify-content: space-around;
    padding: 0;
  }
`;
export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  ${HeaderContainerResponsive}
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
