import React from 'react';
import PropTypes from 'prop-types';
import { Card as SuiCard } from 'semantic-ui-react';

import CardDescription from './CardDescription';


const Card = ({ header, color, children }) => (
    <SuiCard color={color}>
        <SuiCard.Content header={header} />
        {children}
    </SuiCard>
);

Card.propTypes = {
    header: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

Card.Description = CardDescription;

export default Card;
