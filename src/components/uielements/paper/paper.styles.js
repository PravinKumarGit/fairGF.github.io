import styled from "styled-components";
import { palette, size } from "styled-theme";

const Wrapper = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: center;
  .secondWrapper{    
    width: 75vw;
    margin: 5vh 0;
    padding: 40px 5%;
    background-color: #fff;
    font-size: calc(10px + 2vmin);
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(199,195,195,.2);
    @media only screen and (max-width: ${size("M")}) {
      width: 90vw
    }
    @media only screen and (max-width: ${size("s")}) {
      width: 100vw
    }
  }
}
`;

export default Wrapper;
