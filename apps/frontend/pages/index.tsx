import React from 'react';

import {EntityExample} from '@entities/_example';
import {SharedExample} from '@shared/_example';
import {FeatureExample} from '@features/_example';
import {WidgetExample} from '@widgets/_example';
import {Button} from '@packages/ui';

export default function MainPage() {
  return (
    <div>
      <EntityExample />
      <SharedExample />
      <FeatureExample />
      <WidgetExample />
      <Button />
    </div>
  );
}
