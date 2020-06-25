import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Card from '../../../../common/components/Card';
import seLocalization from '../../../../resources/localization';

import './Encounter.scss';


const Encounter = ({ encounter: { number, options } }) => (
    <Card
        key={number}
        header={seLocalization.encounterNumber(number)}
        color='green'
    >
        {options.map(o => (
            <Card.Description
                key={o.number}
                className={classNames(
                    'encounter-option',
                    { 'encounter-option--private': o.private },
                )}
            >
                <span className='encounter-option__title'>
                    {o.private ? seLocalization.silentOptionTitle : o.title}
                </span>
                &nbsp;
                {o.description}
            </Card.Description>
        ))}
    </Card>
);

Encounter.propTypes = {
    encounter: PropTypes.shape({
        number: PropTypes.number.isRequired,
        options: PropTypes.arrayOf(PropTypes.shape({
            number: PropTypes.number,
            private: PropTypes.bool,
            title: PropTypes.string,
            description: PropTypes.string,
        })).isRequired,
    }),
};

export default Encounter;
