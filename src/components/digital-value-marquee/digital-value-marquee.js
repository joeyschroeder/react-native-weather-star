import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { DigitalValue } from 'components/digital-value/digital-value';

const getUpdatedValue = (value) => {
  if (!value) return '';

  const firstChar = value.charAt(0);
  const restOfValue = value.slice(1);

  return restOfValue + firstChar;
};

export function DigitalValueMarquee(props) {
  const { maxChars, value, ...other } = props;

  if (!value) return <DigitalValue {...other} />;

  const padEnd = maxChars || 20;
  const initialValue = value.padEnd(padEnd, '_');

  const [marqueeValue, setMarqueeValue] = useState(initialValue);

  useEffect(() => {
    const timerInterval = setInterval(() => setMarqueeValue(getUpdatedValue(marqueeValue)), 500);
    return () => clearInterval(timerInterval);
  });

  return <DigitalValue maxChars={maxChars} value={marqueeValue} {...other} />;
}

DigitalValueMarquee.propTypes = {
  maxChars: PropTypes.number,
  value: PropTypes.string,
};

DigitalValueMarquee.defaultProps = {
  maxChars: undefined,
  value: undefined,
};
