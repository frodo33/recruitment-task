import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import { Title } from 'components/Title';
import { ButtonAdd } from 'components/ButtonAdd';
import { SingleItem } from 'components/SingleItem';
import { List } from 'components/List/List';

import { singleItems } from 'app/slices/listSlice';

const CardWrapper = styled.div`
    width: 90%;
    min-height: 80vh;
    background: #fff;
    box-shadow: 0px 3px 15px 0px #00000030;
    margin: 10rem auto 2rem;
    padding: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 767px) {
        width: 100%;
        padding: 2rem 1rem 7rem;
    }
`;

const Content = styled.ul`
    position: relative;
    width: calc(75% + 25%/2);
    align-self: flex-end;
    border-left: 1px solid #b7bdca;
    padding: 20px 0 50px 0px;
    @media screen and (max-width: 767px) {
        width: 85%;
    }
`;

export const Card = () => {
    const data = useSelector(singleItems);
    return (
        <CardWrapper>
            <Title text={'People'} />
            <Content>
                <ButtonAdd />
                { data.map( (data, ind) => data.single 
                    ? <SingleItem key={ind} index={ind} text={data.title} /> 
                    : <List key={ind} index={ind} text={data.title} />)}
            </Content>

        </CardWrapper>
    )
}