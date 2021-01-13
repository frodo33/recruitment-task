import React from 'react';
import styled, { css } from 'styled-components/macro';

const BtnAdd = styled.button`
    position: absolute;
    width: 5rem;
    height: 5rem;
    top: 100%;
    left: 0;
    transform: translate(-50%,-50%);
    background: linear-gradient(#89f3a0, #28e7e6);
    border-radius: 50%;
    border: none;
    outline: none;
    box-shadow: 
        0px 0px 0px 10px #ffffff,
        0px 13px 25px 0px #00000030;
    
    ${ ({ small }) => small && css`
        width: 3rem;
        height: 3rem;
        box-shadow: 
        0px 0px 0px 5px #ffffff,
        0px 13px 25px 0px #00000030;
    `}
    &:before, &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 2.2rem;
        height: .6rem;
        background: #fff;
        border-radius: 2px;
        ${ ({ small }) => small && css`
            width: 1.6rem;
            height: .4rem;
        `}
    }
    &:before {
        box-shadow: 0px 3px 15px 0px #00000030;
        transform: translate(-50%,-50%) rotate(-90deg);
    }
`;


export const ButtonAdd = ({ small }) => {
	return (
		<BtnAdd small={small}></BtnAdd>
	)
}
