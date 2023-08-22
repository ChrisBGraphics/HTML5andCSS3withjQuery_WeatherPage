import React from 'react'
import { render, fireEvent, waitFor, screen, getAllByTestId } from '@testing-library/react'
import '@testing-library/jest-dom'
import Body from './weather4-body'

test('Load city', async () => {  
    render(<Body city={"Calgary, CA"}/>);

    waitFor(() => {
        expect(screen.getByTestId('city').toBeInTheDocument('Calgary, CA'));
    }).then();

})

test('Load no city', async () => {
    render(<Body city={""}/>);

    waitFor(() => {
        //Weather Item should not be displayed
        expect(screen.getByTestId('weatherItem').toBeEmptyDOMElement())
        //Graph Should not be displayed
        expect(screen.getByTestId('graph').toBeEmptyDOMElement())
    }).then()

})