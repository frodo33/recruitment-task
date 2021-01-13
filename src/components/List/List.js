import React from 'react';
import styled from 'styled-components/macro';

import { Border } from 'globalStyles';
import { ButtonAdd } from 'components/ButtonAdd';
import { ListItem } from 'components/List/ListItem';
import { ListHeader } from 'components/List/ListHeader';

const ListWrapper = styled.li`
    position: relative;
    width: 50%;
    margin: 3rem 0 3rem 10rem;
    border-radius: 5px;
    font-size: 2rem;
    font-weight: 600;
    padding: 2.5rem 2.5rem 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    box-shadow: 0px 3px 15px 0px #00000030;
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

const ListContent = styled.ul`
    position: relative;
    width: calc(75% + 25%/2);
    align-self: flex-end;
    border-left: 1px solid #b7bdca;
    padding: 1rem 0 1.5rem 0;
`;

export const List = () => {
    return (
        <ListWrapper>
            <Border></Border>
            <ListHeader />
            <ListContent>
                <ButtonAdd small/>
                <ListItem />
                <ListItem />
                <ListItem />
            </ListContent>
        </ListWrapper>
    )
}