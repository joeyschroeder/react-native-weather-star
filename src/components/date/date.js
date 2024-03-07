import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { DigitalValueWithLabel } from '../digital-value-with-label/digital-value-with-label';
import moment from 'moment';
import { SPACER } from '../../constants/spacer';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: SPACER,
  },
});

export function Date(props) {
  const { color, style, value, size } = props;

  if (!value) return null;
  const containerStyle = [styles.container, style];

  const day = moment(value).format('DD');
  const month = moment(value).format('MMM');
  // const year = moment(value).format('YYYY');

  return (
    <View style={containerStyle}>
      <DigitalValueWithLabel value={month} label="Month" color={color} size={size} />
      <DigitalValueWithLabel value={day} label="Day" color={color} size={size} />
      {/* <DigitalValueWithLabel value={year} label="Year" color={color} /> */}
    </View>
  );
}

Date.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
  value: PropTypes.string,
};

Date.defaultProps = {
  color: undefined,
  size: undefined,
  style: undefined,
  value: undefined,
};
