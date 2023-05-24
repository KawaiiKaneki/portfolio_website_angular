import React, { useState } from 'react'

const Navbar = () => {

    const {isOpen, setIsOpen} = useState(false)
    const {isTop, setIsTop} = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY === 0){
                setIsTop(true)
            }
            if(window.scrollY !==0){
                setIsTop(false)
            }
            window.addEventListener("scroll", handleScroll)
            return () => window.removeEventListener("scroll", handleScroll)
        }
    }, [])
  return (
    <section>
        <div className={`$(isTop ? "": "bg-[#201934]") md:px-16 sm:px-8`}>

        </div>
    </section>
  )
}

export default Navbar