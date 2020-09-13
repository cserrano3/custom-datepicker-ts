import React from 'react';
import Month from '../../domains/Month';
import Input from '../Input/Input';
import Calendar from '../Calendar/Calendar';
import './style.scss';

interface Props {
  month: Month;
  isDatePickerVisible: boolean;
  currentDate: Date;
  onShowDatePicker: () => void;
  onNavigateToNextMonth: () => void;
  onNavigateToPreviousMonth: () => void;
}

export default function DatePickerWrapperView({
  month,
  isDatePickerVisible,
  onShowDatePicker,
  onNavigateToNextMonth,
  onNavigateToPreviousMonth,
  currentDate
}: Props) {
  return (
    <div className="date-picker__wrapper">
      <Input onShowDatePicker={onShowDatePicker} />
      <Calendar
        currentDate={currentDate}
        onNavigatePreviousMonth={onNavigateToPreviousMonth}
        isDatePickerVisible={isDatePickerVisible}
        onNavigateNextMonth={onNavigateToNextMonth}
      />
    </div>
  )
}
