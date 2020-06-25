import React, { useMemo, useState } from 'react';

import TextField from '../../../common/components/TextField';
import CardsList from '../../../common/components/CardsList';
import seLocalization from '../../../resources/localization';
import encounters from '../../../resources/models/encounters';
import Encounter from './Encounter';

import './EncountersList.scss';


const EncountersList = () => {
    const [searchFilter, setSearchFilter] = useState('');

    const filteredEncounters = useMemo(() => {
        if (!searchFilter) {
            return encounters;
        }
        const encounterNumber = parseInt(searchFilter);
        if (!isNaN(encounterNumber)) {
            const encounter = encounters.find(e => e.number === encounterNumber);
            if (encounter) {
                return [encounter];
            }

            return [];
        }
        const searchFilterLowercase = searchFilter.toLowerCase();

        return encounters.filter(e => {
            const searchData = e.options
                .flatMap(o => [o.title, o.description])
                .filter(sd => !!sd)
                .map(sd => sd.toLowerCase());

            return searchData.some(sd => sd.includes(searchFilterLowercase));
        });
    }, [encounters, searchFilter]);

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
