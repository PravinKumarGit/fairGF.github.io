import styled from "styled-components";
import { palette } from "styled-theme";

const Wrapper = styled.div`
  .verifyBankDetails-Container {
    display: flex;
    border-radius: 5px;
    font-size: 13px;
    justify-content: center;
    margin-top: 20px;
    position: relative;
  }

  #fgf-bank-frame {
    padding: 5px;
    border: none;
    width: 80%;
    height: 500px;
    overflow-x: hidden;
    background-color: rgba(228, 228, 228);
    border-radius: 5px;
  }
  .label {
    margin-right: 3px;
    font-weight: 700;
  }
  .left-align {
    display: flex;
    text-align: left;
    flex-direction: row;
  }
`;

export default Wrapper;