import React from 'react';
import styled from 'styled-components/macro';

import { Border } from 'globalStyles';
import { ButtonAdd } from 'components/ButtonAdd';
import { ButtonRemove } from 'components/ButtonRemove';

const ListWrapper = styled.div`
    width: 90%;
    background: #fff;
    box-shadow: 0px 3px 15px 0px #00000030;
    margin: 20rem auto 0;
    padding: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    // end of extended styles 

    position: relative;
    width: 50%;
    margin: 3rem 0 3rem 10rem;
    border-radius: 5px;
    font-size: 2rem;
    font-weight: 600;
    padding: 2.5rem 2.5rem 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-100%,-50%);
        width: 10rem;
        height: 0.1rem;
        background: #b7bdca;
    }
    &:after {
        content: 'And';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-450%,-50%);
        color: #b7bdca;
        font-size: 1.8rem;
    }
`;

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

const ListContent = styled.div`
    position: relative;
    width: calc(75% + 25%/2);
    align-self: flex-end;
    /*background: #f4f4f4;*/
    border-left: 1px solid #b7bdca;
    padding: 20px 0 50px 0px;

    // end of extended styles

    padding: 1rem 0 1.5rem 0;
`;

const ListElement = styled.div`
    position: relative;
    width: 50%;
    background: #fff;
    box-shadow: 0px 3px 15px 0px #00000030;
    margin: 3rem 0 3rem 10rem;
    border-radius: 5px;
    font-size: 2rem;
    font-weight: 600;
    padding: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-100%,-50%);
        width: 10rem;
        height: 0.1rem;
        background: #b7bdca;
    }
    &:after {
        content: 'And';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-450%,-50%);
        color: #b7bdca;
        font-size: 1.8rem;
    }
    // end of extended styles

    width: calc(100% - 4rem);
    background: transparent;
    box-shadow: none;
    border: 1px solid #b7bdca;
    margin: 1.5rem 0 1.5rem 4rem;
    padding: 1.2rem;
    &:before { width: 4rem; }
    &:after {
        content: 'Or';
        font-size: 1.4rem;
    }
`;

export const List = () => {
    return (
        <ListWrapper>
            <Border></Border>
            <ListTitle>
                Ethnicity
                <ButtonRemove outside={true} />
            </ListTitle>
            <ListContent>
                <ButtonAdd small/>
                <ListElement>
                    Black
                    <ButtonRemove />
                </ListElement>
                <ListElement>
                    Hispanic
                    <ButtonRemove />
                </ListElement>
            </ListContent>
        </ListWrapper>
    )
}