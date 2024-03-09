import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { DateTimeSection } from '../date-time-section/date-time-section';
import moment from 'moment';

const TIMER_INTERVAL = 1000 * 60;

export function CurrentDateTimeSection(props) {
  const { style } = props;
  const [now, setNow] = useState(moment().format());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setNow(moment().format());
    }, TIMER_INTERVAL);

    return () => clearInterval(timerInterval);
  }, []);

  return <DateTimeSection blink style={style} value={now} />;
}

CurrentDateTimeSection.propTypes = {
  style: PropTypes.object,
};

CurrentDateTimeSection.defaultProps = {
  style: undefined,
};
