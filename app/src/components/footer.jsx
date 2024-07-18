import { useEffect, useState } from 'react';
import './footer.css';

const list = [
  {
    text: 'this is text 1',
    author: 'Sergio 2021',
  },
  {
    text: '123123123123123123',
    author: 'Me 2021',
  },
  {
    text: 'sdfsdf234dsfsdfsdf',
    author: 'Someone',
  },
  {
    text: 'asd12 asd 1234 asd234 qw',
    author: 'mess 2021',
  },
];

function Footer() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % list.length);
    }, 6000);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="footer">
      <h1>this is the footer</h1>

      <p key={index} className="typewriter-text">
        {list[index].text}
      </p>
      <p>{list[index].author}</p>
    </div>
  );
}

export default Footer;
