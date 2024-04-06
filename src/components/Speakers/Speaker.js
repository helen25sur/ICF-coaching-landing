import React from 'react';


const Speaker = ({ name, description, photo, contacts }) => {

  const SpecializationSpeaker = (props) => <><strong>Спеціалізація в коучингу:</strong> {props.specialization} <br /></>;
  const ExperienceSpeaker = (props) => <><strong>Досвід коучингової роботи:</strong> {props.experience} <br /></>;
  const OtherExperienceSpeaker = (props) => <span><strong>Інший досвід:</strong> {props.other_experience}</span>;

  return (
    <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
      <div className="shadow-1 dark:shadow-box-dark group mb-8 rounded-[5px] bg-white px-5 pb-10 pt-12 dark:bg-dark">
        <div className="relative z-10 mx-auto mb-5 h-[200px] w-[200px]overflow-hidden">
          <img src={photo} alt={name} className="mx-auto h-[200px] w-[200px] object-cover object-top rounded-full" />
        </div>
        <div className="text-center">
          <h3 className="mb-1 text-xl font-bold text-primary dark:text-blue-200">
            {name}
          </h3>
          <div className="dark:text-dark-7 mb-5 text-base text-body-color whitespace-pre-line">
            {description.length > 0 ? description : ''} <div>
              <p className='mb-2'><strong>{description.title}</strong></p>
              {description.specialization ? <SpecializationSpeaker specialization={description.specialization} /> : ''}

              {description.experience ? <ExperienceSpeaker experience={description.experience} /> : ''}

              {description.other_experience ? <OtherExperienceSpeaker other_experience={description.other_experience} /> : ''}
            </div>
          </div>
          <div className="flex items-center justify-center gap-5">
            {contacts.map(c => {
              return (
                <a key={c.social} href={c.href} className="text-dark-6 hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" title={c.title} className="w-7 h-7" aria-hidden="true" focusable="false" viewBox="0 0 512 512">
                    <path fill="currentColor" d={c.icon} />
                  </svg>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Speaker;
