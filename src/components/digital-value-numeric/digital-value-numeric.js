import React from 'react';
import PropTypes from 'prop-types';
import { FONTS } from 'constants/fonts';
import { scaledValue } from 'utils/scaled-value/scaled-value';
import { useCountUp } from 'use-count-up';
import { DigitalValue } from 'components/digital-value/digital-value';

const COMMON_PROPS = {
  fontFamily: FONTS.MONO.NUMBER.ITALIC,
  shadowChar: '8',
};

export function DigitalValueNumeric(props) {
  const { isCountingUp, value, ...other } = props;

  // eslint-disable-next-line react/jsx-props-no-spreading
  if (value === undefined || value === null) return <DigitalValue {...COMMON_PROPS} {...other} />;

  let normalizedValue = value;

  if (isCountingUp) {
    const { value: countUpValue } = useCountUp({
      duration: 1,
      end: value,
      isCounting: true,
    });

    normalizedValue = countUpValue;
  }

  normalizedValue = normalizedValue.toString();

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <DigitalValue {...COMMON_PROPS} value={normalizedValue} {...other} />;
}

DigitalValueNumeric.propTypes = {
  color: PropTypes.string,
  isCountingUp: PropTypes.bool,
  maxChars: PropTypes.number,
  minChars: PropTypes.number,
  size: PropTypes.number,
  style: PropTypes.object,
  value: PropTypes.number,
};

DigitalValueNumeric.defaultProps = {
  color: undefined,
  isCountingUp: false,
  maxChars: undefined,
  minChars: 2,
  size: scaledValue(110),
  style: undefined,
  value: undefined,
};
