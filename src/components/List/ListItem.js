import React from 'react';
import styled from 'styled-components/macro';
import { ButtonRemove } from 'components/ButtonRemove';

const ListElement = styled.li`
    position: relative;
    width: calc(100% - 4rem);
    background: transparent;
    box-shadow: none;
    margin: 1.5rem 0 1.5rem 4rem;
    padding: 1.2rem;
    border: 1px solid #b7bdca;
    border-radius: 5px;
    font-size: 2rem;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 767px) {
        width: 100%;
        margin: 1.5rem 0 1.5rem 2rem;
    }
    &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-100%,-50%);
        width: 4rem;
        height: 0.1rem;
        background: #b7bdca;
        @media screen and (max-width: 767px) {
            width: 2rem;
        }
    }
    &:after {
        content: 'Or';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-450%,-50%);
        color: #b7bdca;
        font-size: 1.4rem;
        @media screen and (max-width: 767px) {
            transform: translate(-300%,-50%)
        }
    }
`;

const ItemTitle = styled.span`
    width: calc(100% - 5rem);
    overflow: scroll;
`;

export const ListItem = ({ title, itemIndex, listItemIndex }) => {
    return (
        <ListElement>
            <ItemTitle>{title}</ItemTitle>
            <ButtonRemove itemIndex={itemIndex} listItemIndex={listItemIndex} />
        </ListElement>
    )
}