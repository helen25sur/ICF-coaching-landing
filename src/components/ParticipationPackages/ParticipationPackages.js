import React from 'react';
import participationPackagesJSON from "../../data/participation_packages.json";
import Package from './Package';

const ParticipationPackages = () => {
  return (
    <section id='participation_packages' className='overflow-hidden pb-8 pt-4 dark:bg-dark'>
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          <div className="mx-auto mb-[60px] text-center lg:mb-20">
            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-primary dark:text-blue-200 sm:text-4xl md:text-[40px]">
              ПАКЕТИ УЧАСТІ
            </h2>
            <div className='flex flex-wrap justify-center -mx-4 items-stretch mt-10 gap-y-6'>
              {
                participationPackagesJSON.map(pack => <Package title={pack.title} contains={pack.contains} cost={pack.cost} />)
              }
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default ParticipationPackages;
