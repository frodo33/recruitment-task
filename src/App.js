import React from 'react';
import { GlobalStyle } from './globalStyles'
import { AddItemPopup } from 'components/AddItemPopup';
import { Card } from 'components/Card';

export const App = () => {
    return(
        <>
            <GlobalStyle />
            <Card />
            <AddItemPopup />
        </>
    )
}