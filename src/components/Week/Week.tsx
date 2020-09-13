import React from 'react';
import * as dateFns from 'date-fns'
import * as R from 'ramda';
import DayCell from '../DayCell/DayCell';
import DAYS_IN_A_WEEK from '../../constants/daysInAWeek';
import { startAnimation } from 'framer-motion';

interface Props {
  monthStartDate: Date;
  monthEndDate: Date;
  dayStartOfTheWeek: Date;
  dayEndOfTheWeek: Date;
  selectedDate?: Date;
}

const Week = ({
  monthStartDate,
  monthEndDate,
  dayStartOfTheWeek,
  dayEndOfTheWeek,
  selectedDate,
}: Props) => {

  let weekRow: Array<React.ReactNode> = [];

  let weeks: Array<React.ReactNode> = []

  let day = dayStartOfTheWeek

  console.log('day -------- ', day)
  while (day <= dayEndOfTheWeek) {

    for (let i = 0; i < DAYS_IN_A_WEEK; i++) {
      weekRow = [...weekRow, <DayCell
        currentDay={day}
        onClickDate={() => console.log('hii')}
        isSameDay={dateFns.isSameDay(day, new Date())}
        isSameMonth={dateFns.isSameMonth(day, monthStartDate)}
      />]
      console.log('a week ----------- ', weekRow)
      day = dateFns.addDays(day, 1);

    }

    weeks.push(weekRow);
    weekRow = []
  }

  return (
    <>{null}</>
  )

}

export default Week;
