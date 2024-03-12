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
  const { color, size, style, value } = props;

  if (!value) return null;
  const containerStyle = [styles.container, style];

  const day = moment(value).format('DD');
  const month = moment(value).format('MMM');
  // const year = moment(value).format('YYYY');

  return (
    <View style={containerStyle}>
      <DigitalValueWithLabel color={color} label="Month" size={size} value={month} />
      <DigitalValueWithLabel color={color} label="Day" size={size} value={day} />
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
