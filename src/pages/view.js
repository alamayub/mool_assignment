import { useLocation } from "react-router-dom";
import '../css/view.css'

const View = () => {
  const location = useLocation();
  const { text, quotes } = location.state
  return (
    <section>
      <div className="container">
        <div className="searched__text">Yuo searched for "{text}"</div>
        <div className='suggession__quotes'>
          {quotes.length > 0 ? quotes.map((q, i) => <div className='suggession' key={i}>{q}</div>) : <div className='suggession not__found'>Nothing found</div>}
        </div>
      </div>
    </section>  
  )  
}

export default View