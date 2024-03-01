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
import { Section } from '../section/section';
import { DigitalValueWithLabel } from '../digital-value-with-label/digital-value-with-label';
import { SPACER } from '../../constants/spacer';
import { scaledValue } from '../../utils/scaled-value/scaled-value';

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
        <View style={{ flexDirection: 'row', flex: 1, gap: FLEX_GAP }}>
          <Section label="Temperature" style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', gap: SPACER }}>
              <DigitalValueWithLabel
                append="°F"
                label="Current"
                size={scaledValue(253)}
                value="60"
              />
              <View style={{ gap: SPACER / 2 }}>
                <DigitalValueWithLabel append="°" label="Hi/lo" value="89" />
                <DigitalValueWithLabel append="°" value="55" />
              </View>
            </View>
          </Section>
          <View style={{ gap: FLEX_GAP }}>
            <Section label="Precip." style={{ flex: 1 }}>
              <View style={{ gap: SPACER }}>
                <DigitalValueWithLabel
                  color={COLORS.INFO}
                  label="Rain"
                  value="15"
                  append="%"
                />
                <DigitalValueWithLabel
                  label="Humidity"
                  append="%"
                  value="18"
                  color={COLORS.INFO}
                />
              </View>
            </Section>
          </View>
          <View style={{ gap: FLEX_GAP }}>
            <Section label="Wind" style={{ flex: 1 }}>
              <View style={{ gap: SPACER }}>
                <DigitalValueWithLabel
                  color={COLORS.WHITE}
                  label="MPH"
                  value="15"
                />
                <DigitalValueWithLabel
                  color={COLORS.WHITE}
                  value="NE"
                  label="Dir."
                />
              </View>
            </Section>
          </View>
        </View>
        <DateTimeSection
          blink
          color={COLORS.WHITE}
          label="Present Time"
          value={now}
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
