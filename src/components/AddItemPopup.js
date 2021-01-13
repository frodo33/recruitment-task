import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { popupIsOpen } from 'app/slices/popupSlice';

import { CloseButton } from 'components/CloseButton';

const Popup = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #00000080;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .2s ease-in-out;
    opacity: ${ ({ isOpen }) => isOpen ? '1' : '0' };
    pointer-events: ${ ({ isOpen }) => isOpen ? 'auto' : 'none' };
`;

const PopupForm = styled.form`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background: #fff;
    box-shadow: 0px 3px 15px 0px #00000030;
    padding: 4rem 10rem;
    border-radius: 5px;
`;

const PopupTitle = styled.h1`
    width: 100%;
    text-align: center;
    margin: 2rem 0;
`;
const PopupInput = styled.input`
    width: 70%;
    border-radius: 5px;
    font-size: 2.2rem;
    padding-left: 1.2rem;
`;
const PopupButton = styled.button`
    width: 20%;
    align-self: center;
    padding: 2rem 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.2rem;
    box-shadow: 0px 0px 15px 5px #8276f650;
    text-shadow: 0px 1px 5px #00000070;
    background: #8276f6;
    color: #fff;
    border: none;
    border-radius: 5px;
    outline: none;
`;

export const AddItemPopup = () => {
	const isOpen = useSelector(popupIsOpen);
	return (
		<Popup isOpen={isOpen}>
            <PopupForm>
                <CloseButton />
                <PopupTitle>Add new element</PopupTitle>
                <PopupInput></PopupInput>
                <PopupButton>Add</PopupButton>
            </PopupForm>
        </Popup>
	)
}
