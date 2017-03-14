import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Checkbox from './Checkbox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const input = {
  value: true,
  onChange: () => console.log('🍇', 'onChange'), // eslint-disable-line no-console
};

const input2 = {
  value: false,
  onChange: () => console.log('🍇', 'onChange'), // eslint-disable-line no-console
};

storiesOf('Checkbox', module)
  .addDecorator((getStory) => (
    <MuiThemeProvider>
      <div style={{width: '320px', padding: '20px'}}>
        { getStory() }
      </div>
    </MuiThemeProvider>
  ))
  .add('on', () => (
    <Checkbox
      input={input}
      label={'My label'}
    />
  ))
  .add('on - disabled', () => (
    <Checkbox
      disabled={true}
      input={input}
      label={'My label'}
    />
  ))
  .add('off', () => (
    <Checkbox
      input={input2}
      label={'My label'}
    />
  ));
