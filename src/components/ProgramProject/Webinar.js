import React from 'react'
import TitleComponent from '../ui/TitleComponent'

const Webinar = () => {
  return (
    <section className="overflow-hidden pb-8 pt-4 dark:bg-dark">
      <div className="container mx-auto">
        <TitleComponent align="center" text="1-й ЕТАП" />
        <div className="flex flex-wrap items-center justify-between mt-12">
          <div className="w-full px-4 lg:w-6/12">
            <div className="relative mb-8 lg:mb-0">
              <div className="mx-auto max-w-[430px] rounded-tl-[50px] sm:rounded-tl-[70px]">
                <img src="/program-project.jpg" alt="Unsplash - Woman's working and drinking coffee" className="w-full rounded-tl-[50px] sm:rounded-tl-[70px]" />
                <p className='sr-only'>Photo by <a href="https://unsplash.com/@andrewtneel?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Andrew Neel</a> on <a href="https://unsplash.com/photos/man-holding-white-ceramic-teacup-QLqNalPe0RA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 2xl:w-5/12">
            <div className="mt-10 lg:mt-0 flex flex-col">
              <h2 className="mb-5 text-2xl font-bold text-center leading-tight text-dark dark:text-white sm:text-3xl sm:leading-tight md:text-4xl lg:text-3xl lg:leading-tight xl:text-4xl">
                БЕЗКОШТОВНИЙ ВЕБІНАР «МАРШРУТ ТВОГО СТАРТУ В ІТ»
              </h2>
              <h3 className='mb-3 text-2xl text-center font-bold leading-[1.2] text-primary dark:text-blue-200 sm:text-4xl md:text-[32px]'><span>16.04.2024 <br /> 18:00 - 19:30</span></h3>
              <div className="my-8 flex">
                <div className="w-full">
                  <ul className="space-y-3">
                    <li className="flex text-base text-body-color dark:text-dark-6">
                      <span className="mr-2.5 mt-0.5 text-primary">
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
                      <h3 className="mb-4 text-xl font-bold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                        резюме, LinkedIn профіль, підбір вакансій, співбесіда
                      </h3>
                    </li>
                    <li className="flex text-base text-body-color dark:text-dark-6">
                      <span className="mr-2.5 mt-0.5 text-primary">
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
                      <p className="mb-4 text-xl font-bold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                        самопрезентація та чому важливий особистий бренд кандидата?
                      </p>
                    </li>
                    <li className="flex text-base text-body-color dark:text-dark-6">
                      <span className="mr-2.5 mt-0.5 text-primary">
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
                      <p className="mb-4 text-xl font-bold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                        як бути проактивним та не втрачати віри?
                      </p>
                    </li>
                    <li className="flex text-base text-body-color dark:text-dark-6">
                      <span className="mr-2.5 mt-0.5 text-primary">
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
                      <p className="mb-4 text-xl font-bold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                        аналітика при пошуку роботи та умови оферу в ІТ
                      </p>
                    </li>
                  </ul>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScBDB0gGnMrGYlOcxxGmAiN1JQ32L3bLohmOFLJAK7EzCjCLA/viewform" rel="noreferrer" target='_blank' className="flex items-center justify-center border border-primary bg-primary px-7 py-3 text-center text-base font-medium text-white hover:border-[#1B44C8] hover:bg-[#1B44C8] active:border-[#1B44C8] active:bg-[#1B44C8] disabled:border-gray-3 disabled:bg-gray-3 disabled:text-dark-5">
                    <span className="pr-[10px]">
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
                    ВЗЯТИ УЧАСТЬ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Webinar
