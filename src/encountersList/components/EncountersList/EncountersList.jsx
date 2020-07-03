import React, { useMemo, useState } from 'react';
import orderBy from 'lodash/orderBy';

import TextField from '../../../common/components/TextField';
import CardsList from '../../../common/components/CardsList';
import seLocalization from '../../../resources/localization';
import encounters from '../../../resources/models/encounters';
import Encounter from './Encounter';

import './EncountersList.scss';


const EncountersList = () => {
    const [searchFilter, setSearchFilter] = useState('');

    const sortedEncounters = useMemo(
        () => orderBy(encounters, [e => e.number], ['asc']),
        [],
    );
    const filteredEncounters = useMemo(() => {
        if (!searchFilter) {
            return sortedEncounters;
        }
        const encounterNumber = parseInt(searchFilter);
        if (!isNaN(encounterNumber)) {
            const encounter = sortedEncounters.find(e => e.number === encounterNumber);
            if (encounter) {
                return [encounter];
            }

            return [];
        }
        const searchFilterLowercase = searchFilter.toLowerCase();

        return sortedEncounters.filter(e => {
            const searchData = e.options
                .flatMap(o => [o.title, o.description])
                .filter(sd => !!sd)
                .map(sd => sd.toLowerCase());

            return searchData.some(sd => sd.includes(searchFilterLowercase));
        });
    }, [searchFilter, sortedEncounters]);

    return (
        <div className='encounters-list-container'>
            <TextField
                className='encounters-list-container__search'
                placeholder={seLocalization.pleaseEnterEncounterCardNumber}
                value={searchFilter}
                onChange={e => setSearchFilter(e.target.value)}
            />
            <CardsList>
                {filteredEncounters.map(e => (
                    <Encounter
                        key={e.number}
                        encounter={e}
                    />
                ))}
            </CardsList>
        </div>
    );
};

export default EncountersList;
