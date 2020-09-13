import React from 'react';
import WEEK_DAYS from '../../constants/weekDays';
import './style.scss';

interface Props {
  className?: string
}

const WeekRow = ({
  className = ''
}: Props) => {
  return <>
    { WEEK_DAYS.map(day =>
      <span className="week-row" key={day}>
        {day}
      </span>)
    }
  </>
}

export default WeekRow;
