import React from 'react'
import Icon from '../Icon/Icon';
import './style.scss';

interface Props {
  onNavigateToPreviousMonth: () => void;
  onNavigateToNextMonth: () => void;
  currentDate: Date
}

const Header = ({
  onNavigateToPreviousMonth,
  onNavigateToNextMonth,
  currentDate
}: Props) => {
  return (
    <div className="header">
      <button
        className="header__navigate-button"
        onClick={onNavigateToPreviousMonth}>
        <Icon iconName="chevron_left" />
      </button>
      <h3 className="header__title">
        {new Intl.DateTimeFormat('en-US').format(currentDate)}
      </h3>
      <button
        className="header__navigate-button"
        onClick={onNavigateToNextMonth}>
        <Icon iconName="chevron_right" />
      </button>
    </div>
  )
}

export default Header;
