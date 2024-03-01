import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { COLORS } from '../../constants/colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FONTS } from '../../constants/fonts';
import { BORDER_RADIUS } from '../../constants/border-radius';
import { BORDER_WIDTH } from '../../constants/border-width';
import moment from 'moment';
import { SPACER } from '../../constants/spacer';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  displayValue: {
    borderColor: COLORS.WHITE,
    borderRadius: BORDER_RADIUS,
    borderWidth: BORDER_WIDTH,
    marginLeft: SPACER,
    position: 'relative',
  },
  displayValueLabel: {
    padding: SPACER / 2,
  },
  text: {
    color: COLORS.WHITE,
    fontFamily: FONTS.SCRIPT.BOLD,
    textTransform: 'uppercase',
  },
});

export function TimePicker(props) {
  const { value, onChange, style } = props;

  if (!value) return null;
  const [modalActive, setModalActive] = useState(false);
  const containerStyle = [styles.container, style];

  const handleOnChange = (event, date) => {
    const {
      nativeEvent: { timestamp, utcOffset },
    } = event;

    return onChange({ date, timestamp, utcOffset });
  };

  const displayValue = moment(value).format('h:mm A');

  return (
    <View style={containerStyle}>
      <Text style={styles.text}>Time: </Text>
      <View style={styles.displayValue}>
        <View style={styles.displayValueLabel}>
          <Text style={styles.text}>{displayValue}</Text>
        </View>
      </View>
    </View>
  );
}

TimePicker.propTypes = {
  onChange: PropTypes.func,
  style: PropTypes.object,
  value: PropTypes.object,
};

TimePicker.defaultProps = {
  onChange: () => {},
  style: undefined,
  value: undefined,
};
