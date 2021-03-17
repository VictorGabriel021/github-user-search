import React from 'react';
import './styles.scss';

type Props = {
  title: string;
  handleOnClick?: () => void; 
}

const Button = ({ title, handleOnClick }: Props) => (
    <button className="button-primary" onClick={handleOnClick}>
      {title}
    </button>
);

export default Button;