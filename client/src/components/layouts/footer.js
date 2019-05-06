import React from 'react';

const Footer = (props) => {
    return ( 
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <p className="copyright">react contact book &copy; <a href="#">Tamal H</a> 2019</p>
                    </div>

                    <div className="col-sm-9 text-right">
                         <div className="pinme">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-github"></i></a>
                         </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;