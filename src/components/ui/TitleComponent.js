import React from 'react';

const TitleComponent = ({ text, align }) => {
  return (
    <h2 className={`self-${align} text-${align} mb-3 text-3xl font-bold leading-[1.2] text-primary dark:text-blue-200 sm:text-4xl md:text-[40px]`} >
      {text}
    </h2 >
  )
}

export default TitleComponent;
