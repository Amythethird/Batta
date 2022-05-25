import React from 'react';
import "../../styles/style.css"
import User from '../../testdata/user.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SocialMedia = () => {

const social = [];
// Filter Social Media
 for (const [key, value] of Object.entries(User.socialMedia)) {
    if(value){
        social.push(key)
    }
  }

return (  
<div className='social'>
{
              social.map((i,socialMediaTag) =>
              <div className='icon' key={socialMediaTag}>
              <span>
                  <a><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
              </span>
            </div>
              )
            }
</div>
);
}
export default SocialMedia;