import styled from "styled-components";
import { palette, size } from "styled-theme";

const Wrapper = styled.div`

.verification{
    margin: 10px 30px;
}
.verification p {
    display: flex;
    padding-left: 3px;
    padding-bottom: 7px;
    color: ${palette("grayscale", 17)};
    font-weight: 700;
    font-size: ${size("p2")};
    
}
.verification-options{
    display: flex;
    padding-left: 3px;
    padding-bottom: 7px;
    color: ${palette("grayscale", 17)};
    font-weight: 400;
    font-size: ${size("p2")};
    justify-content: flex-start;
    align-items: center;
}
.verification-options input{
    margin-right: 10px;
}
.option-container{
    margin-right:30px;
}
`;

export default Wrapper;
