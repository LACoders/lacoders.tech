import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div id="contactform">
    <h1>Get in touch with us</h1>
    <form action="https://formspree.io/argi@pitchglobally.media"
      method="POST">
      <input type="text" name="name" placeholder="Full Name" />
      <input type="email" name="email" placeholder="Email" />
      <textarea name="message" placeholder="Message" rows="5"></textarea>
      <input type="text" name="_gotcha" style={{display: 'none'}} />
      <button type="submit" value="Submit">Submit</button>
    </form>
  </div>
)

export default SecondPage
