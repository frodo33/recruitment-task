import React from 'react';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux';

import { setVisibility } from 'app/slices/popupSlice';

const CloseBtn = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 3rem;
    height: 3rem;
    background: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    &:before, &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%) rotate(-135deg);
        width: 1.8rem;
        height: 0.4rem;
        background: #000000;
        border-radius: 1px;
    }
    &:after { transform: translate(-50%,-50%) rotate(-45deg) }

`;

export const CloseButton = () => {
    const dispatch = useDispatch();

    const handleClosePopup = (ev) => {
        ev.preventDefault();
        dispatch(setVisibility(false));
    }
    return (
        <CloseBtn
            onClick={ (ev) => handleClosePopup(ev) }
        ></CloseBtn>
    )
}