import React from 'react';

import TextField from '../../../common/components/TextField';
import seLocalization from '../../../resources/localization';

import './EncountersList.scss';


const EncountersList = () => (
    <div className='encounters-list'>
        <TextField placeholder={seLocalization.pleaseEnterEncounterCardNumber} />
    </div>
);

export default EncountersList;
