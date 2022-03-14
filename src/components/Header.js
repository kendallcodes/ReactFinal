import React from 'react'
import { Link, useParams } from 'react-router-dom';

const HeaderLink = ({ page }) => {

    const title = page.charAt(0).toUpperCase() + page.slice(1);

    return <Link to={`/${page}`} className="headerlink-title">
      {title}
   
    </Link>;

    
  };

  const Header = () => { 
    const page  = useParams().page || 'home';

    return ( 
      <div className='header'>
        <p className='pageTitle'>Cities to Visit</p>
        <HeaderLink page='home' selected={page === 'home'} />
        <HeaderLink page='addCity' selected={page === 'addCity'} />
        <HeaderLink page='cities' selected={page === 'cities'}/>
      </div>
    );
  };


export default Header