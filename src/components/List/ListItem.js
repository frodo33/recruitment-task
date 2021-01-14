import React from 'react';
import styled from 'styled-components/macro';
import { ButtonRemove } from 'components/ButtonRemove';

const ListElement = styled.li`
    position: relative;
    width: 50%;
    background: #fff;
    box-shadow: 0px 3px 15px 0px #00000030;
    margin: 3rem 0 3rem 10rem;
    border-radius: 5px;
    font-size: 2rem;
    font-weight: 600;
    padding: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-100%,-50%);
        width: 10rem;
        height: 0.1rem;
        background: #b7bdca;
    }
    &:after {
        content: 'And';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-450%,-50%);
        color: #b7bdca;
        font-size: 1.8rem;
    }
    // end of extended styles

    width: calc(100% - 4rem);
    background: transparent;
    box-shadow: none;
    border: 1px solid #b7bdca;
    margin: 1.5rem 0 1.5rem 4rem;
    padding: 1.2rem;
    &:before { width: 4rem; }
    &:after {
        content: 'Or';
        font-size: 1.4rem;
    }
`;

export const ListItem = ({ title, listIndex, listItemIndex }) => {
    return (
        <ListElement>
            {title}
            <ButtonRemove itemIndex={listIndex} listItemIndex={listItemIndex} />
        </ListElement>
    )
}