import styled from 'styled-components';

export const Item = styled.div`
a {
    display: block;
    border: 1px solid #FFF;
    margin: 10px;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    color: #000;
    min-height: 275px;
    background-color: #FFF;
    transition: all ease .2s;

    &:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .itemImage img {
        max-width: 100%;
        border-radius: 5px;
    };

    .itemName {
        font-weight: bold;
    }
}
`;