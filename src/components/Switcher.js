import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { setListChecked } from 'app/slices/popupSlice';


const PopupSwitcher = styled.div`
    position: relative;
    width: 50%;
    min-height: 50px;
    margin: 0rem 0 2rem;
    border-radius: 5px;
    font-size: 1.8rem;
    font-weight: 600;
    display: ${ ({ visible }) => visible ? 'flex' : 'none' };
    align-items: center;
    justify-content: space-around;
`;
const ToggleSwitch = styled.div`
    position: relative;
    width: 60px;
    height: 34px;
    border: ${ ({ active }) => active ? '1px solid #89f3a0' : '1px solid #6e6e6e' };
    background: #f4f4f4;
    border-radius: 2rem;
    cursor: pointer;
    transition: .2s ease-in-out;
`;
const Slider = styled.div`
    position: absolute;
    width: 47%;
    height: 90%;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transition: .2s ease-in-out;
    transform: ${ ({ active }) => active ? 'translate(-10%,-50%)' : 'translate(-90%,-50%)' };
    background: ${ ({ active }) => active ? '#89f3a0' : '#6e6e6e' };
`;

export const Switcher = ({ isChecked, isListPopup }) => {
    const dispatch = useDispatch();
	return (
		<PopupSwitcher 
            visible={!isListPopup}
            onClick={ () => isChecked ? dispatch(setListChecked(false)) : dispatch(setListChecked(true)) } >
            Want to add list?
            <ToggleSwitch active={isChecked}>
                <Slider active={isChecked}></Slider>
            </ToggleSwitch>
        </PopupSwitcher>
	)
}
