import React from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components/macro';

import { removeItem } from 'app/slices/listSlice';

const BtnRemove = styled.button`
    position: relative;
    width: 3rem;
    height: 3rem;
    background: #f45370;
    border-radius: 50%;
    border: none;
    outline: none;
    box-shadow: 0px 3px 15px 0px #00000030;
    cursor: pointer;
    ${ ({ outside }) => outside && css`
    	position: absolute;
	    top: 50%;
	    left: 100%;
	    transform: translate(50%,-50%);
    `}
    &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 1.5rem;
        height: 0.5rem;
        background: #fff;
        border-radius: 5px;
    }
`;

export const ButtonRemove = ({ itemIndex, outside }) => {
    const dispatch = useDispatch();
	return (
		<BtnRemove
            outside={outside}
            onClick={ e => dispatch(removeItem(itemIndex)) }
        ></BtnRemove>
	)
}
