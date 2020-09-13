import React from 'react';
import './style.scss';

interface Props {
  onShowDatePicker: () => void;
}

const Input = ({
  onShowDatePicker
}: Props) => {
  return (
    <div className="input__container" onClick={onShowDatePicker}>
      <input type="date" className="input" />
    </div>
  )
};

export default Input;
