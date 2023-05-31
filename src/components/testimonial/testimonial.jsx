import React from 'react';

import './testimonial.css';

function Testimonial() {
  
  return (
    <div className="slidertestimonial">
        <h1 className="whatclientsay">What's our client say?</h1>
      <input type="radio" name="testimonial" id="t-1" />
      <input type="radio" name="testimonial" id="t-2" />
      <input type="radio" name="testimonial" id="t-3" defaultChecked />
      <input type="radio" name="testimonial" id="t-4" />
      <input type="radio" name="testimonial" id="t-5" />
      <div className="testimonials">
        <label className="item" htmlFor="t-1">
          <img src="https://dummyimage.com/150" alt="picture" />
          <p>"Raw denim you probably haven't heard of them jean short austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
          <h2>- Princy, Web Developer</h2>
        </label>
        <label className="item" htmlFor="t-2">
          <img src="https://dummyimage.com/150" alt="picture" />
          <p>"Raw denim you probably haven't heard of them jean short austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
          <h2>- Princy, Web Developer</h2>
        </label>
        <label className="item" htmlFor="t-3">
          <img src="https://dummyimage.com/150" alt="picture" />
          <p>"Raw denim you probably haven't heard of them jean short austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
          <h2>- Princy, Web Developer</h2>
        </label>
        <label className="item" htmlFor="t-4">
          <img src="https://dummyimage.com/150" alt="picture" />
          <p>"Raw denim you probably haven't heard of them jean short austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
          <h2>- Princy, Web Developer</h2>
        </label>
        <label className="item" htmlFor="t-5">
          <img src="https://dummyimage.com/150" alt="picture" />
          <p>"Raw denim you probably haven't heard of them jean short austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
          <h2>- Princy, Web Developer</h2>
        </label>
      </div>
      <div className="dots">
        <label htmlFor="t-1"></label>
        <label htmlFor="t-2"></label>
        <label htmlFor="t-3"></label>
        <label htmlFor="t-4"></label>
        <label htmlFor="t-5"></label>
      </div>
    </div>
  );
}

export default Testimonial;
