import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { Section } from '../section/section';
import { COLORS } from '../../constants/colors';
import { FLEX_GAP } from '../../constants/flex-gap';
import { Date } from '../date/date';
import { Time } from '../time/time';
import { DateTime } from '../date-time/date-time';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLACK,
    flex: 1,
    gap: FLEX_GAP,
    justifyContent: 'center',
  },
});

export function App(props) {
  const { onLayout } = props;

  return (
    <View style={styles.container} onLayout={onLayout}>
      <Section label="Destination Time">
        {/* <Date value="1985-10-26" color={COLORS.DANGER} /> */}
        <DateTime value="1985-10-26T01:21:00" color={COLORS.DANGER} />
      </Section>
      <Section label="Present Time">
        <DateTime value="1985-10-26T01:21:00" color={COLORS.SUCCESS} />
      </Section>
      <Section label="Last Time Departed">
        <DateTime value="1985-10-26T01:21:00" color={COLORS.WARNING} />
      </Section>
    </View>
  );
}

App.propTypes = {
  onLayout: PropTypes.func,
};

App.defaultProps = {
  onLayout: undefined,
};
