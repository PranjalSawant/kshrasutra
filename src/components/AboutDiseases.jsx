import React from 'react'
import { Title } from './Title'
import { Cards } from './Cards'

export const AboutDiseases = () => {
  return (
    <div>
        <div className="bg-ivory text-green py-5">
            <div className="py-5"></div>
            <Title title="All About Anorectal Diseases"/>
            <p className='px-md-5 pb-3 text-center'>Anorectal diseases encompass a range of conditions affecting the anus and rectum,<br className="d-none d-sm-inline"/> may require medical intervention for effective management and relief.</p>
            <Cards/>
            <div className="py-5"></div>
        </div>
    </div>
  )
}
