import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Made with <span role="img">❤️</span> by <a href="https://ayush-page.herokuapp.com/">Ayush</a> ⓒ {year} .</p>
    </footer>
  );
}

export default Footer;