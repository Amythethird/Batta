import React from 'react';
import "../../styles/style.css"
import user from '../../user/user.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faBoxOpen } from '@fortawesome/free-solid-svg-icons'



interface UserProps{
  tag: string[]; 
}

function User(props: UserProps) { 
  const mail = user.mail
  const social = [];

// Filter Social Media
 for (const [key, value] of Object.entries(user.socialMedia)) {
    if(value){
        social.push(key)
    }
  }




  
  
  return (
  <main>
      <section className=' user section pb-0 pt-6 mx-2 is-medium mt-space-large mb-space-large'>
        <div className='profil container'>
        <div className='columns  m-3'>
            <div className='column has-text-centered is-one-quarter'>
            <figure className="image is-128x128 mb-2">
                <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
            </figure>
           
          
         
            {
              social.map((i,socialMediaTag) =>
              <div className='icon' key={socialMediaTag}>
              <span>
                  <FontAwesomeIcon icon={['fab', 'youtube']} />
              </span>
            </div>
              )
            }
            </div>
            <div className='column'>
                <h1 className='is-size-4  has-text-left has-text-weight-bold'>{user.name +" "+ user.vorname}</h1>
                <p className='is-size-6'>Fashionliebhaber und koole Sau</p>
                {props.tag.map((i,tagItem) =>
                          <span className="tag mr-2 mt-5 mb-2" key={tagItem}>
                              {i}
                          </span>
                          )}
                 
            {mail.length > 0 &&
                      <a>{mail}</a>
            }

         

            </div>
            <div className='column'>
            <div className='badge is-flex is-align-items-center'>
              <span className='m-2'>
                    <FontAwesomeIcon icon={faLeaf} size="2x"/>   
              </span>
              <div className='badgeText'>
                    <h2 className='is-size-6'>Fair Trade</h2>
                    <p className='is-size-6'>erhalten bei <a>Lisas Klamotten</a></p>
                    </div>
              </div>
              <div className='badge is-flex is-align-items-center'>
              <span className='m-2'>
                    <FontAwesomeIcon icon={faBoxOpen} size="2x"/>   
              </span>
              <div className='badgeText'>
                    <h2 className='is-size-6'>Unverpackt</h2>
                    <p className='is-size-6'>erhalten bei <a>Verpacknix</a></p>
                    </div>
              </div>
            </div>
        </div>
        </div>
      </section>
        
  </main>

  );
}

export default User;
