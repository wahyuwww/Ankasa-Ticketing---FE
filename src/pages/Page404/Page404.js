import './page.css'
import { Link } from "react-router-dom";

import React, { Component } from 'react'

export default class Page404 extends Component {
  render() {
    return (
     <div>
       <h5>There's some issues 🙂</h5>  
        <section className="error-container">  
          <span><span>4</span></span>  
          <span>0</span>  
          <span><span>4</span></span>  
        </section>  
        <div className="link-container">
          <Link to="/airlanes" className="more-link">
            Visit the home page
            </Link>   
        </div>
    </div>
    )
  }
}
