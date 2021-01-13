import React from 'react';
import styled from 'styled-components/macro';
import { ButtonRemove } from 'components/ButtonRemove';

const ListTitle = styled.h1`
    width: 25%;
    align-self: flex-start;
    text-align: center;
    font-size: 2.2rem;
    box-shadow: 0px 0px 15px 5px #8276f650;
    text-shadow: 0px 1px 5px #00000070;
    background: #8276f6;
    color: #fff;
    border: none;
    border-radius: 5px;
    outline: none;
    padding: 2rem 5rem;
    ///end of extended styles
    position: relative;
    width: 85%;
    text-align: left;
    font-size: 2rem;
    font-weight: 600;
    box-shadow: none;
    text-shadow: none;
    background: transparent;
    border: 1px solid #b7bdca;
    border-radius: 5px;
    outline: none;
    padding: 1.2rem;
    color: #000;
    display: flex;
    align-items: center;
`;

export const ListHeader = () => {
    return (
        <ListTitle>
            Ethnicity
            <ButtonRemove outside={true} />
        </ListTitle>
    )
}