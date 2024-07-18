import './home.css';
import { demoData } from '../services/dataService';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h2>Home page!</h2>

      <div className="list">
        {demoData.map((rec) => (
          <Link className="book" to={'/details/' + rec.id}>
            <h1>{rec.title}</h1>
            <img src={rec.image} alt="" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
