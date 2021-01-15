import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import { Border } from 'globalStyles';
import { ButtonAdd } from 'components/ButtonAdd';
import { ListItem } from 'components/List/ListItem';
import { ListHeader } from 'components/List/ListHeader';

import { singleItems } from 'app/slices/listSlice';

const ListWrapper = styled.li`
    position: relative;
    min-width: 50%;
    max-width: 900px;
    margin: 3rem 0 3rem 10rem;
    border-radius: 5px;
    font-size: 2rem;
    font-weight: 600;
    padding: 2.5rem 2.5rem 5rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    box-shadow: 0px 3px 15px 0px #00000030;
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

const ListContent = styled.ul`
    position: relative;
    width: calc(75% + 25%/2);
    min-height: 40px;
    align-self: flex-end;
    border-left: 1px solid #b7bdca;
    padding: 1rem 0 1.5rem 0;
`;

export const List = ({ index, text }) => {
    const items = useSelector(singleItems);
    return (
        <ListWrapper>
            <Border></Border>
            <ListHeader itemIndex={index} title={text} />
            <ListContent>
                <ButtonAdd small itemIndex={index} />
                { !items.single 
                    && items[index].sublist.map( (title, ind) => <ListItem key={ind} title={title} itemIndex={index} listItemIndex={ind} />) }
            </ListContent>
        </ListWrapper>
    )
}