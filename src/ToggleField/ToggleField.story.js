import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ToggleField from './ToggleField';
import Theme from '@ox2/theme-wrapper/Theme';

const input = {
  value: true,
  onChange: () => console.log('🍇', 'onChange'), // eslint-disable-line no-console
};

const input2 = {
  value: false,
  onChange: () => console.log('🍇', 'onChange'), // eslint-disable-line no-console
};

storiesOf('ToggleField', module)
  .addDecorator((getStory) => (
    <Theme>
      <div style={{width: '320px'}}>
        { getStory() }
      </div>
    </Theme>
  ))
  .add('on', () => (
    <ToggleField
      input={input}
      label={'My label'}
    />
  ))
  .add('on - disabled', () => (
    <ToggleField
      disabled={true}
      input={input}
      label={'My label'}
    />
  ))
  .add('off', () => (
    <ToggleField
      input={input2}
      label={'My label'}
    />
  ));
