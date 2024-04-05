import * as React from "react";

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header x-data="
        {
          navbarOpen: false,
        }
      " className="fixed bg-white bg-opacity-80 dark:bg-dark shadow-sm backdrop-blur-sm left-0 top-0 z-50 w-full">
        <div className="container mx-auto">
          <div className="relative z-40 -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <a href="#" className="block w-full py-5">
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
                      <a href="#" className="dark:text-dark-6 flex py-2 text-base font-medium text-body-color hover:text-dark dark:hover:text-white lg:ml-12 lg:inline-flex">
                        Про нас
                      </a>
                    </li>
                    <li>
                      <a href="#" className="dark:text-dark-6 flex py-2 text-base font-medium text-body-color hover:text-dark dark:hover:text-white lg:ml-12 lg:inline-flex">
                        Для кого?
                      </a>
                    </li>
                    <li>
                      <a href="#" className="dark:text-dark-6 flex py-2 text-base font-medium text-body-color hover:text-dark dark:hover:text-white lg:ml-12 lg:inline-flex">
                        Спікери
                      </a>
                    </li>
                    <li>
                      <a href="#" className="dark:text-dark-6 flex py-2 text-base font-medium text-body-color hover:text-dark dark:hover:text-white lg:ml-12 lg:inline-flex">
                        Програма проєкту
                      </a>
                    </li>
                    <li>
                      <a href="#" className="dark:text-dark-6 flex py-2 text-base font-medium text-body-color hover:text-dark dark:hover:text-white lg:ml-12 lg:inline-flex">
                        Пакети участі
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                <a href="#" className="dark:bg-dark-2 dark:hover:bg-dark-3 rounded-md bg-dark px-7 py-3 text-base font-medium text-white hover:bg-body-color">
                  Взяти участь
                </a>
              </div>
            </div>
          </div>
        </div >
      </header>

      {/* HERO - section */}
      <div className="relative pb-[110px] pt-[150px] dark:bg-dark lg:pt-[170px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 lg:mb-0">
                <h2 className="mb-5 text-3xl font-bold leading-[1.208] text-dark dark:text-white lg:text-[24px] xl:text-[28px]">
                  ПАРТНЕРСЬКИЙ ПРОЄКТ
                </h2>
                <h1 className="mb-5 text-3xl font-bold leading-[1.208] text-dark dark:text-white lg:text-[28px] xl:text-[32px]">«Кар’єрне консультування з коучинговою підтримкою»</h1>
                <h3 className="mb-5 text-2xl font-bold leading-[1.208] text-dark dark:text-white lg:text-[20px] xl:text-[24px]">
                  Галини Разумей, кар’єрної консультантки
                  з досвідом світчерства в ІТ рекрутинг,<br />
                  коучів ICF  <br />
                  волонтерського проєкту WinE
                </h3>
                <h4 className="mb-5 text-2xl text-dark dark:text-white"><data>16-30 квітня 2024 року</data></h4>
                <p className="dark:text-dark-6 mb-8 max-w-[485px] text-base text-body-color">
                  <ul className="space-y-3">
                    <li className="flex text-base text-body-color dark:text-dark-6">
                      <span class="mr-2.5 mt-0.5 text-primary">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 9.5L11.5312 2.9375C11.25 2.65625 10.8125 2.65625 10.5312 2.9375C10.25 3.21875 10.25 3.65625 10.5312 3.9375L15.7812 9.28125H2.5C2.125 9.28125 1.8125 9.59375 1.8125 9.96875C1.8125 10.3438 2.125 10.6875 2.5 10.6875H15.8437L10.5312 16.0938C10.25 16.375 10.25 16.8125 10.5312 17.0938C10.6562 17.2188 10.8437 17.2812 11.0312 17.2812C11.2187 17.2812 11.4062 17.2188 11.5312 17.0625L18 10.5C18.2812 10.2187 18.2812 9.78125 18 9.5Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      закінчили курси і не знаєте, з чого почати пошук роботи? закінчили курси і не знаєте, з чого почати пошук роботи? </li>
                    <li className="flex text-base text-body-color dark:text-dark-6">
                      <span class="mr-2.5 mt-0.5 text-primary">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 9.5L11.5312 2.9375C11.25 2.65625 10.8125 2.65625 10.5312 2.9375C10.25 3.21875 10.25 3.65625 10.5312 3.9375L15.7812 9.28125H2.5C2.125 9.28125 1.8125 9.59375 1.8125 9.96875C1.8125 10.3438 2.125 10.6875 2.5 10.6875H15.8437L10.5312 16.0938C10.25 16.375 10.25 16.8125 10.5312 17.0938C10.6562 17.2188 10.8437 17.2812 11.0312 17.2812C11.2187 17.2812 11.4062 17.2188 11.5312 17.0625L18 10.5C18.2812 10.2187 18.2812 9.78125 18 9.5Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      важко знайти вакансії для початківців?</li>
                    <li className="flex text-base text-body-color dark:text-dark-6">
                      <span class="mr-2.5 mt-0.5 text-primary">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 9.5L11.5312 2.9375C11.25 2.65625 10.8125 2.65625 10.5312 2.9375C10.25 3.21875 10.25 3.65625 10.5312 3.9375L15.7812 9.28125H2.5C2.125 9.28125 1.8125 9.59375 1.8125 9.96875C1.8125 10.3438 2.125 10.6875 2.5 10.6875H15.8437L10.5312 16.0938C10.25 16.375 10.25 16.8125 10.5312 17.0938C10.6562 17.2188 10.8437 17.2812 11.0312 17.2812C11.2187 17.2812 11.4062 17.2188 11.5312 17.0625L18 10.5C18.2812 10.2187 18.2812 9.78125 18 9.5Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      немає відгуків на резюме?</li>
                    <li className="flex text-base text-body-color dark:text-dark-6">
                      <span class="mr-2.5 mt-0.5 text-primary">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 9.5L11.5312 2.9375C11.25 2.65625 10.8125 2.65625 10.5312 2.9375C10.25 3.21875 10.25 3.65625 10.5312 3.9375L15.7812 9.28125H2.5C2.125 9.28125 1.8125 9.59375 1.8125 9.96875C1.8125 10.3438 2.125 10.6875 2.5 10.6875H15.8437L10.5312 16.0938C10.25 16.375 10.25 16.8125 10.5312 17.0938C10.6562 17.2188 10.8437 17.2812 11.0312 17.2812C11.2187 17.2812 11.4062 17.2188 11.5312 17.0625L18 10.5C18.2812 10.2187 18.2812 9.78125 18 9.5Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      хвилюєтеся перед співбесідою?</li>
                    <li className="flex text-base text-body-color dark:text-dark-6">
                      <span class="mr-2.5 mt-0.5 text-primary">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 9.5L11.5312 2.9375C11.25 2.65625 10.8125 2.65625 10.5312 2.9375C10.25 3.21875 10.25 3.65625 10.5312 3.9375L15.7812 9.28125H2.5C2.125 9.28125 1.8125 9.59375 1.8125 9.96875C1.8125 10.3438 2.125 10.6875 2.5 10.6875H15.8437L10.5312 16.0938C10.25 16.375 10.25 16.8125 10.5312 17.0938C10.6562 17.2188 10.8437 17.2812 11.0312 17.2812C11.2187 17.2812 11.4062 17.2188 11.5312 17.0625L18 10.5C18.2812 10.2187 18.2812 9.78125 18 9.5Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      не отримуєте фідбеку від рекрутерів?</li>
                    <li className="flex text-base text-body-color dark:text-dark-6">
                      <span class="mr-2.5 mt-0.5 text-primary">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 9.5L11.5312 2.9375C11.25 2.65625 10.8125 2.65625 10.5312 2.9375C10.25 3.21875 10.25 3.65625 10.5312 3.9375L15.7812 9.28125H2.5C2.125 9.28125 1.8125 9.59375 1.8125 9.96875C1.8125 10.3438 2.125 10.6875 2.5 10.6875H15.8437L10.5312 16.0938C10.25 16.375 10.25 16.8125 10.5312 17.0938C10.6562 17.2188 10.8437 17.2812 11.0312 17.2812C11.2187 17.2812 11.4062 17.2188 11.5312 17.0625L18 10.5C18.2812 10.2187 18.2812 9.78125 18 9.5Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      хочете світчнутися в ІТ, але не впевнені, що знайдете роботу?</li>
                  </ul>
                </p>
              </div>
            </div>

            <div class="w-full px-4 lg:w-1/2">
              <div class="-mx-2 flex flex-wrap sm:-mx-4">
                <div class="w-1/2 px-2 sm:px-4">
                  <div class="mb-4 h-[256px] sm:mb-8 sm:h-[442px] lg:h-[332px] xl:h-[442px]">
                    <img src="/hero-image3.jpg" alt="hero image" class="h-full w-full object-cover object-center" />
                  </div>
                </div>
                <div class="w-1/2 px-2 sm:px-4">
                  <div class="mb-4 h-[120px] sm:mb-8 sm:h-[205px] lg:h-[150px] xl:h-[205px]">
                    <img src="/hero-image1.jpg" alt="hero image" class="h-full w-full object-cover object-center" />
                  </div>
                  <div class="mb-4 h-[120px] sm:mb-8 sm:h-[205px] lg:h-[150px] xl:h-[205px]">
                    <img src="/hero-image2.jpg" alt="hero image" class="h-full w-full object-cover object-center" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
