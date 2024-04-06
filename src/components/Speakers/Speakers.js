import React from 'react';
import Speaker from './Speaker';
import speakersJSON from '../../data/speakers.json';

// const speakers = 

const Speakers = () => {
  return (
    <section id='speakers' className="dark:bg-dark-2 overflow-hidden bg-tg-bg pb-20 pt-20 lg:pb-[100px] lg:pt-[100px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] text-center lg:mb-20">
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-primary dark:text-blue-200 sm:text-4xl md:text-[40px]">
                Спікери та Професійні коучі ICF:
              </h2>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {
            speakersJSON.map(s => {
              return <Speaker key={s.name} name={s.name} description={s.description} photo={s.photo} contacts={s.contacts} />
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Speakers;
