import React, { useState, useEffect } from 'react';
import { FiChevronsUp } from 'react-icons/fi';
const BackToTop = () => {

  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop)
    }
  })

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section>
          <div className='back_to_top'>
            <FiChevronsUp className="scrollTop " onClick={scrollTop} style={{ height: 40, display: showScroll ? 'flex' : 'none' }} />
          </div>
      </section>
    </>
  );
}

export default BackToTop;