import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { setVisibility, popupIsOpen, popupTitle, setListChecked, listIsChecked, isListItemPopup } from 'app/slices/popupSlice';
import { addItem, addCurrentListItem, currentList } from 'app/slices/listSlice';

import { CloseButton } from 'components/CloseButton';
import { Switcher } from 'components/Switcher';

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
    width: 25%;
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
    const dispatch = useDispatch();
	const isOpen = useSelector(popupIsOpen);
    const title = useSelector(popupTitle);
    const isChecked = useSelector(listIsChecked);
    const isListPopup = useSelector(isListItemPopup);
    const curList = useSelector(currentList);

    const [itemTitle, setItemTitle] = useState('');

    const handleAddItem = (ev) => {
        ev.preventDefault();
        let item = {};
        //check value if isn't empty
        if(itemTitle) {
            if(isChecked) {
                // set list item
                item = {
                    title: itemTitle,
                    single: false,
                    sublist: []
                }
                dispatch(addItem(item));
            } else {
                // set single item
                //popup which added element to each list
                if(isListPopup) {
                    item = {
                        title: itemTitle,
                        index: curList,
                        sublist: []
                    }
                    // console.log('tu trzeba update ')
                    dispatch(addCurrentListItem(item));
                } else {
                    item = {
                        title: itemTitle,
                        single: true,
                        sublist: []
                    }
                    dispatch(addItem(item));
                }
            }

            setItemTitle('');
            dispatch(setVisibility(false));
            dispatch(setListChecked(false));
        }
    }

	return (
		<Popup isOpen={isOpen}>
            <PopupForm>
                <CloseButton />
                <PopupTitle>{title}</PopupTitle>
                <Switcher
                    isChecked={isChecked}
                    isListPopup={isListPopup}
                />
                <PopupInput
                    type='text'
                    id='text'
                    value={itemTitle}
                    onChange={ e => setItemTitle(e.target.value) }
                ></PopupInput>
                <PopupButton
                    onClick={ ev => handleAddItem(ev)}
                >Add</PopupButton>
            </PopupForm>
        </Popup>
	)
}
