import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../css/home.css'

const Home = () => {
  const [ text, setText ] = useState('')
  const [ filteredQuotes, setFilteredQuotes ] = useState([])
  const quotes = useSelector(state => state.quotes);
  const filter = (e) => {
    let x = e.target.value
    setText(x)
    if(x && x.length > 0) {
      let filtered = quotes.filter(a => a.includes(x))
      setFilteredQuotes(filtered)
    } else setFilteredQuotes([])
  } 

  const history = useNavigate();
  const navigateTo = (e) => {
    if(e.key === 'Enter' && text && text.length > 0) history('view', { state: { text: text, quotes: filteredQuotes } })
  }

  return (
    <section>
      <div className='container'>
        <input value={text} onChange={filter} placeholder='Search....' onKeyPress={navigateTo} />
        <div className='suggession__quotes'>
          {filteredQuotes.length > 0 ? filteredQuotes.map((q, i) => <div className='suggession' key={i}>{q}</div>) : <div className='suggession not__found'>Nothing found</div>}
        </div>
      </div>
    </section> 
  );  
}

export default Home;