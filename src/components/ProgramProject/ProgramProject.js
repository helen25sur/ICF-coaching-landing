import React from 'react';
import programJSON from '../../data/program_project.json';
import consultingSupportJSON from '../../data/consalting_support.json';
import Webinar from './Webinar';
import Workshop from './Workshop';

const ProgramProject = () => {
  return (
    <section id='program_project' className="dark:bg-dark overflow-hidden pb-20 pt-20 lg:pb-[100px] lg:pt-[100px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] text-center lg:mb-20">
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-primary dark:text-blue-200 sm:text-4xl md:text-[40px]">
                ПРОГРАМА ПРОЄКТУ
              </h2>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center">
          <Webinar />
        </div>

        <div className="flex flex-wrap justify-center pt-5 pb-5 text-center">
          <h3 className="mb-3 text-2xl font-bold leading-[1.2] text-dark dark:text-white sm:text-3xl md:text-[32px]">
            ЩО ПРОПОНУЄМО ПІСЛЯ ВЕБІНАРУ? <br />
            <span className='inline-flex pt-3 pb-6 text-primary dark:text-blue-200'>ПРАКТИЧНІ ВОРКШОПИ З КАР’ЄРНОГО КОНСУЛЬТУВАННЯ</span>
          </h3>
          <p className="dark:text-dark-6 mb-9 text-xl text-body-color max-w-xl">
            Допоможуть тобі структурувати свої навички та досвід у невід’ємних атрибутах працевлаштування
          </p>
        </div>
        <div className="flex justify-center pt-5 pb-5 text-center w-full">
          <ul className="flex flex-wrap items-start justify-center mb-8">
            {
              programJSON.map((ws, idx) => {
                return <li key={ws.title} className='xs:w-full sm:w-1/2 lg:w-1/3 flex gap-2 px-4 justify-center items-start text-base text-body-color dark:text-dark-6'>
                  <span class="relative z-10 mr-2.5 self-center flex h-[32px] w-full max-w-[32px] items-center justify-center rounded text-base text-white">
                    <span class="absolute left-0 top-0 z-[-1] h-full w-full -rotate-45 rounded bg-primary"></span>
                    {idx + 1}
                  </span>
                  <Workshop date={ws.date} title={ws.title} description={ws.description} result={ws.result} /> </li>
              })
            }
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center pt-5 pb-5 text-center">
          <h3 className="mb-9 text-2xl font-bold leading-[1.2] text-primary dark:text-blue-200 sm:text-3xl md:text-[32px]">
            КАР'ЄРНЕ КОНСУЛЬТУВАННЯ
          </h3>
          <ul className='space-y-3'>
            {
              consultingSupportJSON.consulting.map(c => {
                return (
                  <li class="flex text-xl text-dark-3 dark:text-dark-8">
                    <span class="mr-2.5 text-primary"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_980_24878)"><path d="M5.03124 19.4375C4.74999 19.4375 4.46874 19.3437 4.24999 19.1875C3.81249 18.875 3.56249 18.3125 3.65624 17.7812L4.46874 12.75L0.968744 9.15625C0.593744 8.78125 0.468744 8.21875 0.624994 7.6875C0.781244 7.1875 1.21874 6.8125 1.71874 6.75L6.56249 5.96875L8.74999 1.375C8.99999 0.875 9.46874 0.5625 9.99999 0.5625C10.5312 0.5625 11.0312 0.875 11.25 1.375L13.4375 5.9375L18.25 6.6875C18.75 6.78125 19.1875 7.125 19.3437 7.625C19.5312 8.15625 19.375 8.71875 19 9.09375L15.5312 12.7187L16.3437 17.7812C16.4375 18.3437 16.2187 18.875 15.75 19.1875C15.3125 19.5 14.7812 19.5312 14.3125 19.2812L9.99999 16.9375L5.68749 19.2812C5.49999 19.4062 5.24999 19.4375 5.03124 19.4375ZM1.96874 8.125C1.96874 8.125 1.96874 8.15625 1.96874 8.1875L5.62499 11.9375C5.84374 12.1562 5.93749 12.5 5.90624 12.8125L5.06249 18.0312C5.06249 18.0312 5.06249 18.0312 5.06249 18.0625L9.56249 15.625C9.84374 15.4687 10.1875 15.4687 10.5 15.625L15 18.0625C15 18.0625 15 18.0625 15 18.0312L14.1562 12.7812C14.0937 12.4688 14.2187 12.1562 14.4375 11.9062L18.0937 8.15625C18.125 8.125 18.0937 8.09375 18.0937 8.09375L13.0625 7.3125C12.75 7.25 12.4687 7.0625 12.3437 6.75L9.99999 2L7.74999 6.78125C7.62499 7.0625 7.34374 7.28125 7.03124 7.34375L1.96874 8.125Z" fill="currentColor"></path></g>
                      <defs><clipPath id="clip0_980_24878"><rect width="20" height="20" fill="white"></rect></clipPath></defs>
                    </svg>
                    </span>
                    {c}
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center pt-5 pb-5">
          <h3 className="mb-9 text-2xl font-bold leading-[1.2] text-primary dark:text-blue-200 sm:text-3xl md:text-[32px]">
            КОУЧИНГОВИЙ СУПРОВІД
          </h3>
          <ul className='space-y-3'>
            {
              consultingSupportJSON.support.map(sup => {
                return (
                  <li class="flex  text-xl text-dark-3 dark:text-dark-8 max-w-2xl">
                    <span class="mr-2.5 mt-0.5 text-primary">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_980_24852)">
                          <path d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z" fill="currentColor"></path>
                          <path d="M12.6875 7.09375L8.96875 10.7188L7.28125 9.0625C7 8.78125 6.5625 8.8125 6.28125 9.0625C6 9.34375 6.03125 9.78125 6.28125 10.0625L8.28125 12C8.46875 12.1875 8.71875 12.2813 8.96875 12.2813C9.21875 12.2813 9.46875 12.1875 9.65625 12L13.6875 8.125C13.9688 7.84375 13.9688 7.40625 13.6875 7.125C13.4063 6.84375 12.9688 6.84375 12.6875 7.09375Z" fill="currentColor"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_980_24852">
                            <rect width="20" height="20" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    {sup}
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ProgramProject
