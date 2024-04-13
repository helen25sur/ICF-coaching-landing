import React from 'react'

const Package = ({ title, contains, cost, discount }) => {
  return (
    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
      <div class="flex flex-col h-full relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke dark:border-dark-3 bg-white dark:bg-dark-2 py-10 px-6 shadow-pricing sm:p-12 lg:py-10 lg:px-4 xl:p-[32px]">
        <span class="block mb-3 text-2xl font-semibold text-primary">
          {title}
        </span>
        <h2 class="mb-5 text-xl font-bold text-dark dark:text-white">
          {cost !== 'Безкоштовно' && cost !== 'формується за запитом учасниці/учасника' ? <s><span> {cost}</span></s> : cost}
        </h2>
        <h2 class="mb-5 text-3xl font-bold text-dark dark:text-white">
          {discount}
        </h2>
        {cost !== 'Безкоштовно' && cost !== 'формується за запитом учасниці/учасника' ? <span className='text-base text-sm text-body-color dark:text-dark-5'> Вартість дійсна до 17:00 19.04.2024р. </span> : ''}

        <div class="mb-9 mt-4 flex flex-col gap-[14px]">
          {
            contains.map(item => <p class="flex justify-start align-middle text-left text-base text-body-color dark:text-dark-6">
              <span className="pr-[10px] pt-1">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                  <g clip-path="url(#clip0_906_8052)">
                    <path d="M13.1875 9.28125H10.6875V6.8125C10.6875 6.4375 10.375 6.125 9.96875 6.125C9.59375 6.125 9.28125 6.4375 9.28125 6.84375V9.3125H6.8125C6.4375 9.3125 6.125 9.625 6.125 10.0312C6.125 10.4062 6.4375 10.7187 6.84375 10.7187H9.3125V13.1875C9.3125 13.5625 9.625 13.875 10.0312 13.875C10.4062 13.875 10.7187 13.5625 10.7187 13.1562V10.6875H13.1875C13.5625 10.6875 13.875 10.375 13.875 9.96875C13.875 9.59375 13.5625 9.28125 13.1875 9.28125Z"></path>
                    <path d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.8125 19.4688 10.0312 19.4688C15.25 19.4688 19.5 15.2188 19.5 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.5625 18.0625 10C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_906_8052">
                      <rect width="20" height="20" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </span>
              {item}
            </p>)
          }
        </div>
        <a rel="noreferrer" target='_blank' href="https://forms.gle/TiDpBFMtwH2YaBYw6" class="block w-full mt-auto p-3 text-base font-bold text-center transition bg-transparent border rounded-md border-dark-5 dark:border-dark-6 text-primary hover:border-primary hover:bg-primary hover:text-white uppercase ">
          Choose {title}
        </a>

        <div>
          <span class="absolute right-0 top-7 z-[-1]">
            <svg width="77" height="172" viewBox="0 0 77 172" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)"></circle>
              <defs>
                <linearGradient id="paint0_linear" x1="86" y1="0" x2="86" y2="172" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#3056D3" stop-opacity="0.09"></stop>
                  <stop offset="1" stop-color="#C4C4C4" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Package;
