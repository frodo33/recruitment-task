import React from 'react';
import styled from 'styled-components/macro';
import { ButtonRemove } from 'components/ButtonRemove';

const ListTitle = styled.h1`
    position: relative;
    width: 85%;
    display: flex;
    align-items: center;
    align-self: flex-start;
    text-align: left;
    font-size: 2rem;
    font-weight: 600;
    box-shadow: none;
    text-shadow: none;
    background: transparent;
    color: #000;
    border: 1px solid #b7bdca;
    border-radius: 5px;
    outline: none;
    padding: 1.2rem;
`;

const ItemTitle = styled.span`
    width: 100%;
    overflow: scroll;
`;

export const ListHeader = ({ itemIndex, title }) => {
    return (
        <ListTitle>
            <ItemTitle>{title}</ItemTitle>
            <ButtonRemove outside={true} itemIndex={itemIndex}/>
        </ListTitle>
    )
}