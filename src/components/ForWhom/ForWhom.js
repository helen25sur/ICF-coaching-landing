import React from 'react';

const ForWhom = () => {
  return (
    <section id="for_whom" className="pt-10 pb-10 dark:bg-dark">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <h2 className="mb-3 text-2xl font-bold leading-[1.2] text-primary dark:text-blue-200 sm:text-3xl md:text-[36px]">
                ДЛЯ КОГО:
              </h2>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-full xl:w-1/3">
            <div className="relative mx-auto mb-10 max-w-[370px] text-center">
              <div className="absolute right-[-14px] 2xl:right-[-34px] top-12 hidden h-1 w-24 border-t-2 border-dashed border-primary xl:block 2xl:w-[120px]"></div>
              <div className="mx-auto mb-8 flex h-[100px] w-[100px] items-center justify-center rounded-[20px] bg-primary text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                </svg>

              </div>
              <p className="mb-5 text-2xl font-semibold text-dark dark:text-white">
                початківців та світчерів, які хочуть розпочати свою кар’єру в ІТ
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-full xl:w-1/3">
            <div className="relative mx-auto mb-10 max-w-[370px] text-center">
              <div className="absolute -left-4 2xl:left-[-32px] top-12 hidden h-1 w-24 border-t-2 border-dashed border-primary xl:block 2xl:w-[120px]"></div>
              <div className="absolute right-[-14px] 2xl:right-[-34px] top-12 hidden h-1 w-24 border-t-2 border-dashed border-primary xl:block 2xl:w-[120px]"></div>
              <div className="mx-auto mb-8 flex h-[100px] w-[100px] items-center justify-center rounded-[20px] bg-primary text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>

              </div>
              <p className="mb-5 text-2xl font-semibold text-dark dark:text-white">
                випускників ІТ-курсів, які знаходяться в пошуках першої роботи
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-full xl:w-1/3">
            <div className="relative mx-auto mb-10 max-w-[370px] text-center">
              <div className="absolute left-[-14px] 2xl:left-[-32px] top-12 hidden h-1 w-24 border-t-2 border-dashed border-primary xl:block 2xl:w-[120px]"></div>
              <div className="mx-auto mb-8 flex h-[100px] w-[100px] items-center justify-center rounded-[20px] bg-primary text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
                </svg>

              </div>
              <p className="mb-5 text-2xl font-semibold text-dark dark:text-white">
                усіх, кого захоплює світ інновацій та у кого є бажання долучитися до нього
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForWhom;
