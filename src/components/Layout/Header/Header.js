import React from 'react';
import ThemeToggler from '../../ui/ThemeToggler';

const Header = () => {
  return (
    <header x-data="{ navbarOpen: false, }"
      className="fixed bg-white bg-opacity-80 dark:bg-dark shadow-sm backdrop-blur-sm left-0 top-0 z-50 w-full">
      <div className="container mx-auto">
        <div className="relative z-40 -mx-4 flex items-center justify-between">
          <div className="w-64 max-w-full px-4">
            <a href="/" className="block w-full py-5">
              <span className="text-xl font-bold leading-[1.208] text-dark dark:text-white lg:text-[12px] xl:text-[16px]">Coach your IT start</span>
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button id="navbarToggler" className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden">
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
              </button>
              <nav id="navbarCollapse" className="dark:bg-dark-2 absolute right-4 top-full z-40 w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none lg:dark:bg-transparent hidden">
                <ul className="blcok lg:flex">
                  <li>
                    <a href="#about_us" className="dark:text-dark-6 flex py-2 text-base font-medium text-body-color hover:text-dark dark:hover:text-white lg:ml-10 lg:inline-flex">
                      Про нас
                    </a>
                  </li>
                  <li>
                    <a href="#for_whom" className="dark:text-dark-6 flex py-2 text-base font-medium text-body-color hover:text-dark dark:hover:text-white lg:ml-10 lg:inline-flex">
                      Для кого?
                    </a>
                  </li>
                  <li>
                    <a href="#speakers" className="dark:text-dark-6 flex py-2 text-base font-medium text-body-color hover:text-dark dark:hover:text-white lg:ml-10 lg:inline-flex">
                      Спікери
                    </a>
                  </li>
                  <li>
                    <a href="#program_project" className="dark:text-dark-6 flex py-2 text-base font-medium text-body-color hover:text-dark dark:hover:text-white lg:ml-10 lg:inline-flex">
                      Програма проєкту
                    </a>
                  </li>
                  <li>
                    <a href="#participation_packages" className="dark:text-dark-6 flex py-2 text-base font-medium text-body-color hover:text-dark dark:hover:text-white lg:ml-10 lg:inline-flex">
                      Пакети участі
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <a rel="noreferrer" target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLScBDB0gGnMrGYlOcxxGmAiN1JQ32L3bLohmOFLJAK7EzCjCLA/viewform" className="inline-flex items-center justify-center rounded-md border border-primary bg-primary px-7 py-3 text-center text-base font-medium text-white hover:border-[#1B44C8] hover:bg-[#1B44C8] active:border-[#1B44C8] active:bg-[#1B44C8] disabled:border-gray-3 disabled:bg-gray-3 disabled:text-dark-5">
                Взяти участь
              </a>
            </div>
            <ThemeToggler />
          </div>
        </div>
      </div >
    </header>
  )
}

export default Header;
