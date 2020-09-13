import React from 'react';
import { format } from 'date-fns';

import './style.scss'

interface Props {
  currentDay: Date,
  isSameDay: boolean;
  isSameMonth: boolean;
  onClickDate: (day: Date) => void
}

const DayCell = ({
  currentDay,
  isSameDay,
  isSameMonth,
  onClickDate
}: Props) => {

  return (
    <div
      className={`day-cell ${!isSameMonth ?
        'disabled' :
        isSameDay ?
          'selected' : ''}`}
      onClick={() => onClickDate(currentDay)}>
      <span className="day-cell__number">{
        format(currentDay, 'd')
      }</span>
    </div>
  )
}

export default DayCell;
