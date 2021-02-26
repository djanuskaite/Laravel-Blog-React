import React from 'react';


const Header = () => {

return (
<header className="masthead" style={{  
        backgroundImage: "url(" + "https://cdn.pixabay.com/photo/2015/12/08/00/26/desk-1081708_1280.jpg" + ")",
        backgroundPosition: 'center',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
      }}>
    
    <div className="container">
        <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                    <h1 style={{ color: '#b2b2b2' }}>Design Blog</h1>
                    <span className="subheading mb-5" style={{ color: '#908c8a' }}>A Blog Theme by Start Bootstrap</span>
                </div>
            </div>
        </div>
    </div>
</header>


  );
}

  export default Header