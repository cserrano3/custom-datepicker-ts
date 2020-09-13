import React from 'react'
import { addMonths, subMonths } from 'date-fns';
import Month from '../../domains/Month'
import DatePickerWrapperView from './DatePickerWrapperView';

const DatePickerWrapper = () => {
  const [month, getMonth] = React.useState<Month>({
    days: []
  });

  const [isDatePickerVisible, showDatePicker] = React.useState<boolean>(false);

  const [currentDate, setCurrentDate] = React.useState<Date>(new Date());

  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date());

  const onShowDatePicker = React.useCallback(() => {
    showDatePicker(!isDatePickerVisible);
  }, [isDatePickerVisible])

  const onNavigateToNextMonth = React.useCallback(() => {
    setCurrentDate(addMonths(currentDate, 1))
  }, [currentDate])

  const onNavigateToPreviousMonth = React.useCallback(() => {
    setCurrentDate(subMonths(currentDate, 1))
  }, [currentDate])

  return (
    <DatePickerWrapperView
      currentDate={currentDate}
      onNavigateToNextMonth={onNavigateToNextMonth}
      onNavigateToPreviousMonth={onNavigateToPreviousMonth}
      isDatePickerVisible={isDatePickerVisible}
      onShowDatePicker={onShowDatePicker}
      month={month}
    />
  )
};

export default DatePickerWrapper;
