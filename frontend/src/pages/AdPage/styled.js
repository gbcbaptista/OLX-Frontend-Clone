import styled, {keyframes} from 'styled-components';

const loading_1 = keyframes`
from {background-color: #DDD;}
  to {background-color: #CCC;}
`;

export const Fake = styled.div`
height: ${props=>props.height || 20}px;
background-color: #DDD;
animation-name: ${loading_1};
animation-duration: .75s;
animation-direction: alternate;
animation-iteration-count: infinite;
    `;


export const PageArea = styled.div`
 display: flex;
 margin-top: 20px;

 .box {
     background-color: #FFF;
     border-radius: 5px;
     box-shadow: 0px 0px 4px #999;
     margin-bottom: 20px;
 }

 .box--padding {
    padding: 10px;
 }

 .leftSide {
    flex: 1;
    margin-right: 20px;

    .adImage {

    }
    .adInfo{
        padding: 10px;

        .adName{
            margin-bottom: 10px;
        }
        .adDescription {

        }

    }

 }

 .rightSide {
    width: 250px;
 }
`;