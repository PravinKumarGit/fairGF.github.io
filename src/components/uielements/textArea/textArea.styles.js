import styled from "styled-components";
import { palette, size } from "styled-theme";

const Wrapper = styled.div`
  .textArea {
    display: flex;
    margin: 10px 30px;
    height: 80px;
    flex-direction: column;
    position: relative;
  }
  .textArea-Label-Container {
    display: flex;
    width: fit-content;
  }
  .textArea-Label {
    display: inline-flex;
    padding-left: 3px;
    padding-bottom: 7px;
    color: ${palette("grayscale", 17)};
    font-weight: 700;
    font-size: ${size("p2")};
  }
  .textArea-Label-Optional {
    padding-left: 6px;
    font-size: ${size("p3")};
    color: ${palette("grayscale", 15)};
    font-weight: 700;
  }
  .textArea-Input {
    display: flex;
    border: 1px solid ${palette("border", 5)};
    border-radius: 5px;
    margin: 0 !important;
  }

  .textArea-Input textarea {
    display: inline-block;
    border: none;
    align-content: center;
    width: 100%;
    font-size: ${size("p1")};
    padding: none !important;
    color: ${palette("color", 14)};
    text-overflow: ellipsis;
    padding-left: 10px;
  }
  .textArea-Input textarea:focus {
    outline: none;
  }
  .required:focus-within {
    box-shadow: 0 0 6px ${palette("color", 18)};
    outline: none;
  }
  .required {
    border: 1px solid ${palette("error", 3)}!important;
  }
  .message {
    padding-left: 1px;
    color: ${palette("color", 18)};
    font-size: ${size("p2")};
  }

  .textArea-Input textarea::placeholder {
    color: gray;
    font-weight: lighter;
  }

  .toolTip-Icon {
    float: left;
    text-decoration: none;
    position: relative;
    height: 15px;
    width: 15px;
    cursor: pointer;
    color: ${palette("color", 16)};
    border-radius: 10px;
    font-size: ${size("p4")};
    margin-left: 5px;
  }

  .toolTip-Icon span {
    display: none;
  }

  .toolTip-Icon:hover span {
    display: block;
    position: absolute;
    overflow: hidden;
    bottom: 20px;
  }

  .toolTip-Text {
    display: flex;
    justify-content: center;
    text-align: center;
    padding-top: 5px;
    width: 200px;
    color: gray;
    background-color: ${palette("color", 16)};
    border: 1px solid lightgray;
    border-radius: 5px;
    box-shadow: 1px 2px ${palette("grayscale", 12)};
  }
`;

export default Wrapper;
