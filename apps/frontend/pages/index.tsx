import React from 'react';

import {Button} from '@packages/ui';

import {EntityExample} from '@entities/_example';
import {FeatureExample} from '@features/_example';
import {SharedExample} from '@shared/_example';
import {WidgetExample} from '@widgets/_example';

// eslint-disable-next-line index/only-import-export
const MainPage: React.FC = () => (
    <div>
        <EntityExample />
        <SharedExample />
        <FeatureExample />
        <WidgetExample />
        <Button />
    </div>
);

export default MainPage;
