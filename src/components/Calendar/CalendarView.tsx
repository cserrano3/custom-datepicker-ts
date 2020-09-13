import React from 'react';
import Header from '../Header/Header';
import WeekRow from '../WeekRow/WeekRow';
import DayCell from '../DayCell/DayCell';
import Week from '../Week/Week'
import './style.scss';
import * as dateFns from 'date-fns';

interface Props {
  isDatePickerVisible: boolean;
  onNavigatePreviousMonth: () => void;
  onNavigateNextMonth: () => void;
  currentDate: Date;
}

const CalendarView = ({
  isDatePickerVisible,
  onNavigateNextMonth,
  onNavigatePreviousMonth,
  currentDate
}: Props) => {

  return (
    isDatePickerVisible ?
      <div className="calendar">
        <Header
          currentDate={currentDate}
          onNavigateToNextMonth={onNavigateNextMonth}
          onNavigateToPreviousMonth={onNavigatePreviousMonth}
        />
        <WeekRow />
        <DayCell
          currentDay={currentDate}
          onClickDate={() => {
            console.log('hiii')
          }}
          isSameDay={true}
          isSameMonth={false}
        />
        <DayCell
          currentDay={currentDate}
          onClickDate={() => {
            console.log('hiii')
          }}
          isSameDay={false}
          isSameMonth={false}
        />
        <Week
          monthStartDate={dateFns.startOfMonth(currentDate)}
          monthEndDate={dateFns.endOfMonth(currentDate)}
        />
      </div>
      : null
  )
};

export default CalendarView;
