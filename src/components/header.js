import React from 'react'
import Link from 'gatsby-link'

const styles = {
  joinBtn: {
    float: 'right',
    padding: 7,
    background: 'white',
    borderRadius: 5,
    textDecoration: 'none',
    fontSize: 25,
    textTransform: 'uppercase'
  }
}

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
        <a href="https://www.meetup.com/Coders-Meetup-in-Glendale/" target="_blank" style={styles.joinBtn}>Join</a>
      </h1>
    </div>
  </div>
)

export default Header
