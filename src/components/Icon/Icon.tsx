import React from 'react';
import './style.scss'

interface Props {
  iconName: string;
  className?: string
}

const Icon = ({
  iconName,
  className = ''
}: Props) => {
  return (
    <div className={`icon ${className}`}>
      {iconName}
    </div>
  )
}

export default Icon;
