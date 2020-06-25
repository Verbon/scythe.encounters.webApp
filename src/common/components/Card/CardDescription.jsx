import React from 'react';
import { Card as SuiCard } from 'semantic-ui-react';


const CardDescription = ({ children, ...restProps }) => (
    <SuiCard.Content
        {...restProps}
        description={children}
    />
);

export default CardDescription;
