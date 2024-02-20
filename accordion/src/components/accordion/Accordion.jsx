import React, {useState} from 'react'
import data from './data'
import './styles.css'

function Accordion() {
  const [select, setSelect] = useState(null)

  function handleSingle(id){
    setSelect(id)
  }

  return (
    <div className='container'>
      <div className='accordian'>
        {
          data && data.length > 0 ? 
          data.map(item =><div className='item'>
            <div onClick={()=>handleSingle(item.id)} className='title'>
              <h3>{item.question}</h3>
              <span>+</span>      
            </div>
            {
              select === item.id ? 
              <div className='content'>{item.answer}</div>: null
            }
          </div>)
          : <div>No data found</div>
        }
      </div>
    </div>
  )
}

export default Accordion