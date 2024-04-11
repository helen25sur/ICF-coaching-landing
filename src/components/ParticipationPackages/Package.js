import React from 'react'

const Package = ({ title, contains, cost }) => {
  return (
    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
      <div class="flex flex-col h-full relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke dark:border-dark-3 bg-white dark:bg-dark-2 py-10 px-8 shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-[50px]">
        <span class="block mb-3 text-2xl font-semibold text-primary">
          {title}
        </span>
        <h2 class="mb-5 text-xl font-bold text-dark dark:text-white">
          <span> {cost}</span>

        </h2>

        <div class="mb-9 flex flex-col gap-[14px]">
          {
            contains.map(item => <p class="text-base text-body-color dark:text-dark-6"> {item} </p>)
          }
        </div>
        <a rel="noreferrer" target='_blank' href="https://forms.gle/TiDpBFMtwH2YaBYw6" class="block w-full mt-auto p-3 text-base font-medium text-center transition bg-transparent border rounded-md border-stroke dark:border-dark-3 text-primary hover:border-primary hover:bg-primary hover:text-white">
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
