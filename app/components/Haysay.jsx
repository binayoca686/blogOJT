"use client";
import React from 'react';
import Typed from 'typed.js';

function Haysay() {
    const el = React.useRef(null);
    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["&quot;TLC Student&quot;", "&quot;Strastan Intern&quot;", "&quot;Web Developer&quot;", "&quot;Web Designer&quot;","&quot;Frontend Developer&quot;"],
        typeSpeed: 50,
        loop: true,
        // loopCount: Infinity,
      });
    }, []);
  return (
    <div class="container">
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      <p class="display-6 color-d">cout &lt;&lt; "Hello, world!" &lt;&lt; endl;</p>
      {/* <h1 class="intro-title mb-4">I am Bryan Bayoca</h1> */}
      <p style={{fontSize: '30px'}} class="intro-title mb-4">console.log("I am Bryan Bayoca");</p>
      <p style={{fontSize: '20px'}} class="intro-subtitle">echo <span ref={el} /></p>
      <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#blog" role="button">See Weekly Blogs</a></p> 
    </div>
  )
}

export default Haysay