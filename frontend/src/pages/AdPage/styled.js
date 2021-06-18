import styled, {keyframes} from 'styled-components';

const loading_1 = keyframes`
from {background-color: #d9d9d9;}
  to {background-color: #bfbfbf;}
`;

export const Fake = styled.div`
height: ${props=>props.height || 20}px;
background-color: #d9d9d9;
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

    .box {
        display: flex;
    }

    .adImage {
        width: 320px;
        height: 320px;
        margin-right: 20px;

        .each-slide img {
            display: flex;
            align-items: center;
            justify-content: center;
            background-size: cover;
            height: 320px;
        }
    }
    .adInfo{
        flex: 1;

        .adName{
            margin: 0;
            margin-bottom: 10px;

            h2 {
                margin-top: 20px;
            }
            small {
                color: #999
            }
        }
        .adDescription {

            small {
                color: #999
            }
        }

    }

 }

 .rightSide {
    width: 250px;

    .price span {
        color: #0000FF;
        display: block;
        font-size: 27px;
        font-weight: bold;
    }

    .contactSellerLink {
        background-color: #0000FF;
        color: #FFF;
        height: 30px;
        border-radius: 5px;
        box-shadow: 0px 0px 4px #999;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        margin-bottom: 20px;
    }

    .createdBy small {
        display: block;
        color: #999;
        margin-top: 10px;
    }
 }
`;

export const OthersArea = styled.div`
h2 {
    font-size: 20px;
}

.list {
    display: flex;
    flex-wrap: wrap;

    .adItem {
        width: 25%;
    }
}
`;

export const BreadChumb = styled.div`
font-size: 13px;
margin-top: 20px;

a {
    display: inline-block;
    margin: 0px 5px;
    text-decoration: underline;
    color: #000;
}
`;