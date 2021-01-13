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
    background: #fff;
    box-shadow: 0px 3px 15px 0px #00000030;
    margin: 20rem auto 0;
    padding: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Content = styled.ul`
    position: relative;
    width: calc(75% + 25%/2);
    align-self: flex-end;
    /*background: #f4f4f4;*/
    border-left: 1px solid #b7bdca;
    padding: 20px 0 50px 0px;
`;

export const Card = () => {
    const data = useSelector(singleItems);
    return (
        <CardWrapper>
            <Title text={'People'} />
            <Content>
                <ButtonAdd />
                { data.map( (data, ind) => <SingleItem key={ind} text={data.title} single={data.single} />)}
            </Content>

        </CardWrapper>
    )
}