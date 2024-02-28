import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { COLORS } from '../../constants/colors';
import { FLEX_GAP } from '../../constants/flex-gap';
import { DateTimeSection } from '../date-time-section/date-time-section';
import moment from 'moment';

const TIMER_INTERVAL = 1000 * 60;

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
  const [now, setNow] = useState(moment().format('YYYY-MM-DDTHH:MM'));

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(moment().format('YYYY-MM-DDTHH:MM'));
    }, TIMER_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container} onLayout={onLayout}>
      <DateTimeSection
        label="Destination Time"
        value="1885-01-01T00:00:00"
        color={COLORS.DANGER}
      />
      <DateTimeSection
        label="Present Time"
        value={now}
        blink
        color={COLORS.SUCCESS}
      />
      <DateTimeSection
        label="Last Time Departed"
        value="1955-11-05T09:00:00"
        color={COLORS.WARNING}
      />
    </View>
  );
}

App.propTypes = {
  onLayout: PropTypes.func,
};

App.defaultProps = {
  onLayout: undefined,
};
