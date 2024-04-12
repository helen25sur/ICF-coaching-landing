import React from 'react';

const SubtitleComponent = ({ text, align }) => {
  return (
    <h3 className={`my-5 self-${align} text-${align} text-2xl font-bold leading-[1.208] text-dark dark:text-white lg:text-[20px] xl:text-[24px]`}>
      {text}
    </h3>
  )
}

export default SubtitleComponent;
