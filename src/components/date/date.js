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
  const { color, style, value } = props;

  if (!value) return null;
  const containerStyle = [styles.container, style];

  const day = moment(value).format('DD');
  const month = moment(value).format('MMM');
  const year = moment(value).format('YYYY');

  return (
    <View style={containerStyle}>
      <DigitalValueWithLabel value={month} label="Month" color={color} />
      <DigitalValueWithLabel value={day} label="Day" color={color} />
      <DigitalValueWithLabel value={year} label="Year" color={color} />
    </View>
  );
}

Date.propTypes = {
  color: PropTypes.string,
  value: PropTypes.string,
  style: PropTypes.object,
};

Date.defaultProps = {
  color: undefined,
  value: undefined,
  style: undefined,
};
