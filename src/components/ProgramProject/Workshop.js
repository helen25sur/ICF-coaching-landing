import React from 'react'

const Workshop = ({ date, title, description, result }) => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-start text-dark dark:text-white'>
      <span className='text-2xl text-primary dark:text-blue-200 inline-flex items-center justify-center rounded-md border border-primary px-4 py-2 text-center font-medium hover:bg-blue-light-5 hover:text-body-color dark:hover:text-dark-3'>{date}</span>
      <p className="my-4 text-xl font-bold  sm:text-2xl lg:text-xl xl:text-2xl">
        {title}
      </p>
      <p className='dark:text-dark-6 text-lg text-body-color'>{description}</p>
      <p className='dark:text-dark-6 text-lg text-body-color place-self-end mt-auto pt-4'><span className='underline text-dark-3 dark:text-dark-7'>Результат:  </span>{result}</p>
    </div>
  )
}

export default Workshop
