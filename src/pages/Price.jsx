import React from 'react'
import { Pricing, About } from '../index'
import AOS from 'aos';

function Price() {

    React.useEffect(() => {
        AOS.init({
          duration: 1600,
          once: true,
        });
        window.scrollTo({
          top: 0,
          behavior: 'instant',
        });
        AOS.refresh();
      }, []);

  return (
    <div>
        <Pricing/>
        <About/>
    </div>
  )
}

export default Price