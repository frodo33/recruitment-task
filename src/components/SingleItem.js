import React from 'react'
import styled from 'styled-components/macro';
import { Border } from 'globalStyles';
import { ButtonRemove } from 'components/ButtonRemove';

const Item = styled.li`
    position: relative;
    /*width: 50%;*/
    min-width: 50%;
    max-width: 900px;
    background: #fff;
    box-shadow: 0px 3px 15px 0px #00000030;
    margin: 3rem 0 3rem 10rem;
    border-radius: 5px;
    font-size: 2rem;
    font-weight: 600;
    padding: 2.5rem 2.5rem 2.5rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 767px) {
        margin: 3rem 0 3rem 3rem;
        width: 85%;
    }
    &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-100%,-50%);
        width: 10rem;
        height: 0.1rem;
        background: #b7bdca;
        @media screen and (max-width: 767px) {
            width: 3rem;
        }
    }
    &:after {
        content: 'And';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-450%,-50%);
        color: #b7bdca;
        font-size: 1.8rem;
        @media screen and (max-width: 767px) {
            transform: translate(-220%,-50%);
        }
    }
`;

const ItemTitle = styled.span`
    width: calc(100% - 5rem);
    overflow: scroll;
`;

export const SingleItem = ({ index, text, single }) => {
	return (
		<Item>
            <Border></Border>
            <ItemTitle>{text}</ItemTitle>
            <ButtonRemove itemIndex={index} />
        </Item>
	)
}