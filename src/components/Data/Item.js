import styled from "styled-components";

export default styled.div`
  ${'' /* margin-right: 3rem; */}
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 400px;
  align-items: center;
  text-align: center;
  border-bottom: 3px solid;
  margin-top: 2rem;
  @media screen and (max-width: 750px) {
    margin-left: 50%;


  }
  @media screen and (max-width: 450px) {
    margin-left: 153px;
  }
`;
