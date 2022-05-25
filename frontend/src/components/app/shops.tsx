import React, {MouseEvent} from 'react';
import "../../styles/style.css"
//import Shop from './shop'
import shopData from '../../testdata/shop.json'
import ShopCard from './shopCard';

function Shops() {

 // const ergebniss = shopData.find(e => e.adresse || e.plz === adress )
 // console.log(ergebniss)
 let ergebniss = []
 const [input, setCriteria] = React.useState("");
 const [checkBox, setCheckbox] = React.useState({})

 function handleChange(event: MouseEvent){
   event.preventDefault()

 }

 
 ergebniss = shopData.filter(e => e.plz === input )
 /*const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>) => {
    setCriteria(e.currentTarget.value);
 
  };*/





  return (
  <div >
      <section className='section background_light shopSearch is-medium mt-space-medium'>
     <form>
      <div className='columns'>
          <div className='column'>
          <h1 className='is-size-4   has-text-left'>Finde Shops in deiner nähe</h1>
          <p>... und unterstütze Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae elit libero, a pharetra augue.</p>
          <div className="field is-grouped mt-4">
                      <div className="control is-expanded">
                        <input className="input is-normal" type="text" placeholder="PLZ oder Adresse" name="email"  
                        value={input}
                        onChange={(e) => setCriteria(e.target.value)}
                        
                        />
                      </div>
                      <div className="control">
                        <a className="button is-primary" type='submit' onClick={handleChange}>
                          Finden
                        </a>
                      </div>
            </div>
          <div className='categories is-flex'>
          <div className="field mr-4">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" id="unverpackt" name="unverpackt" value={checkBox} onChange={(e) => setCheckbox([e.target.name])} className='mr-1'  />
                  Unverpackt
                
              </label>
            </div>
            <div className="control">
              <label className="checkbox">
                <input type="checkbox"  id="made_in_Germany"  name="made_in_Germany"  value={checkBox} onChange={(e) => setCheckbox([e.target.name])} className='mr-1'/>
                  Made in Germany
              </label>
            </div>
            <div className="control">
              <label className="checkbox">
                <input type="checkbox"  id="vegan" name="vegan" value="Vegan" className='mr-1'/>
                  Vegan
              </label>
            </div>
            
          </div>
          <div className='field'>
          <div className="control">
              <label className="checkbox">
                <input type="checkbox" className='mr-1'/>
                  Vegetarisch
              </label>
            </div>
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" className='mr-1'/>
                  Fair Trade
              </label>
            </div>
          </div>
          </div>
          </div>
          <div className='column'>
            <h1 className=' has-text-left'>Highlights in Köln</h1>
          </div>
      </div>
     </form>
    </section>

    <section className='section is-medium is-flex'>
    {
              ergebniss.map((e, shops) =>
              <ShopCard key={shops} 
              name={e.shopname} 
              tag={e.tag} 
              oeffnungszeiten={e.oeffnungszeiten} 
              text={e.text} 
              adresse={e.adresse}
              plz ={e.plz}
              img = {e.image}
              />
              )
    }
    </section>
    
  </div>
  );
}

export default Shops;
