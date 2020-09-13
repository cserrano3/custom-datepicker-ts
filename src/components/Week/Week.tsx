import React from 'react';
import * as dateFns from 'date-fns'
import * as R from 'ramda';
import DayCell from '../DayCell/DayCell';

interface Props {
  monthStartDate: Date;
  monthEndDate: Date;
  dayStartOfTheWeek?: number;
  dayEndOfTheWeek?: number;
  selectedDate?: Date;
}

const Week = ({
  monthStartDate,
  monthEndDate,
  dayStartOfTheWeek,
  dayEndOfTheWeek,
  selectedDate,
}: Props) => {

  const startDate = parseInt(dateFns.format(monthStartDate, 'd'));
  const endDate = parseInt(dateFns.format(monthEndDate, 'd'));

  const monthRange = Array(R.range(startDate, endDate + 1))


  // const days = monthRange.map(day => day);
  console.log(monthRange)
  return (
    <>{null}</>
  )

}

export default Week;
