import React from 'react';
import CalendarView from './CalendarView';

interface Props {
  isDatePickerVisible: boolean;
  onNavigatePreviousMonth: () => void;
  onNavigateNextMonth: () => void;
  currentDate: Date;
}

const Calendar = ({
  isDatePickerVisible,
  onNavigateNextMonth,
  onNavigatePreviousMonth,
  currentDate
}: Props) => {
  return <CalendarView
    currentDate={currentDate}
    onNavigatePreviousMonth={onNavigatePreviousMonth}
    onNavigateNextMonth={onNavigateNextMonth}
    isDatePickerVisible={isDatePickerVisible} />
}

export default Calendar;
