import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#101541] py-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 md:w-1/3 lg:w-1/2">
            <div className="flex justify-center my-1 md:justify-start">
              <p className="text-base text-gray-7">© «Кар’єрне консультування з коучинговою підтримкою» - 2024 </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-2/3 lg:w-1/2">
            <div className="my-1">
              <div className="flex flex-wrap items-center justify-center -mx-3 md:justify-end">
                <a target="_blank" rel="noreferrer" href="https://t.me/+3y6dXuld19NhNDAy" className="px-3 text-base text-gray-7 hover:text-white">
                  Telegram
                </a>
                <a href="/privacy-policy" className="px-3 text-base text-gray-7 hover:text-white">
                  Політика конфіденційності
                </a>
                <a href="/offer-contract" className="px-3 text-base text-gray-7 hover:text-white">
                  Договір оферти
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
