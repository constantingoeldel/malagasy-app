import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View} from 'react-native';
import NextButton from './NextButton';
// The story of this did not work because the filename was NextButtonstories.js instead of NextButton.stories.js
storiesOf('ActionButton', module)
  .addDecorator(story => <View style={{alignItems: 'center'}}>{story()}</View>)
  .add('next button', () => (
    <NextButton onPress={action('clicked next button')} text="Next" />
  ));
// .add('add button', () => (
//   <NextButton onPress={action('clicked add button')}>Add</NextButton>
// ))
// .add('disabled button', () => <NextButton disabled>Add</NextButton>);
