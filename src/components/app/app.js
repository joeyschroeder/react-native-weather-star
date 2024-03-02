import { StyleSheet, Text, View } from 'react-native';
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
import { Header } from '../header/header';

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
        <Header station="KMKX" city="Milwaukee" state="WI" />
        <View style={{ flexDirection: 'row', flex: 4, gap: FLEX_GAP }}>
          <Section style={{ flex: 5 }}>
            <View style={{ flexDirection: 'row', gap: SPACER }}>
              <DigitalValueWithLabel
                append="°F"
                label="Current"
                size={scaledValue(240)}
                value="60"
              />
              <View style={{ gap: SPACER / 2 }}>
                <DigitalValueWithLabel append="°" label="High" value="89" />
                <DigitalValueWithLabel append="°" label="Low" value="55" />
              </View>
            </View>
          </Section>
          <View style={{ gap: FLEX_GAP, flex: 2 }}>
            <Section style={{ flex: 1 }}>
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
          <View style={{ gap: FLEX_GAP, flex: 2 }}>
            <Section style={{ flex: 1 }}>
              <View style={{ gap: SPACER }}>
                <DigitalValueWithLabel
                  color={COLORS.WHITE}
                  label="Wind MPH"
                  value="15"
                />
                <DigitalValueWithLabel
                  color={COLORS.WHITE}
                  value="NE"
                  label="Wind Dir."
                />
              </View>
            </Section>
          </View>
        </View>
        <DateTimeSection
          blink
          style={{ flex: 2 }}
          color={COLORS.WHITE}
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
