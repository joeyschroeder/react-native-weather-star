import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { COLORS } from '../../constants/colors';
import { FLEX_GAP } from '../../constants/flex-gap';
import { DateTimeSection } from '../date-time-section/date-time-section';
import moment from 'moment';
import { useKeepAwake } from 'expo-keep-awake';
import { Settings } from '../settings/settings';
import { Footer } from '../footer/footer';
import { BlurView } from 'expo-blur';

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

  useKeepAwake();
  const [now, setNow] = useState(moment().format());
  const [settingsVisible, setSettingsVisible] = useState(false);
  const toggleSettingsVisible = () => setSettingsVisible(!settingsVisible);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(moment().format());
    }, TIMER_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <View style={styles.container} onLayout={onLayout}>
        <DateTimeSection
          style={{ flex: 1 }}
          color={COLORS.DANGER}
          label="Destination Time"
          value="1885-01-01T00:00:00"
        />
        <DateTimeSection
          style={{ flex: 1 }}
          blink
          color={COLORS.SUCCESS}
          label="Present Time"
          value={now}
        />
        <DateTimeSection
          style={{ flex: 1 }}
          color={COLORS.WARNING}
          label="Last Time Departed"
          value="1955-11-05T09:00:00"
        />
        <Footer onSettingsPress={toggleSettingsVisible} />
      </View>
      {settingsVisible && (
        <BlurView intensity={25} style={StyleSheet.absoluteFill} />
      )}
      <Settings visible={settingsVisible} onDismiss={toggleSettingsVisible} />
    </>
  );
}

App.propTypes = {
  onLayout: PropTypes.func,
};

App.defaultProps = {
  onLayout: undefined,
};
