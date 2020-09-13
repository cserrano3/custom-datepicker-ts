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

  const monthStartDate = dateFns.startOfMonth(currentDate);
  const monthEndDate = dateFns.endOfMonth(currentDate);
  const dayStartOfTheWeek = dateFns.startOfWeek(monthStartDate);
  const dayEndOfTheWeek = dateFns.endOfWeek(monthEndDate);

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
          monthStartDate={monthStartDate}
          monthEndDate={monthEndDate}
          dayEndOfTheWeek={dayEndOfTheWeek}
          dayStartOfTheWeek={dayStartOfTheWeek}
        />
      </div>
      : null
  )
};

export default CalendarView;
