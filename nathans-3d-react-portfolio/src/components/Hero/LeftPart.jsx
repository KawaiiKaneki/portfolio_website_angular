import React from 'react'
import {motion} from 'framer-motion'

const LeftPart = () => {

    const container = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    }
    const item = {
        hidden: {
        opacity: 0, x:30
        },
        show: {
            opacity: 1, x:0, transition:{type: 'spring'}
        }
    }

  return (
    <div className='relative md:mt-0 mt-16'>
        <motion.div
            variants={container}
            initial='hidden'
            animate='show'
            className='space-y-5'
        >
            <motion.p variants={item} className='pink-text-gradient'>
                Hi there
            </motion.p>
            <motion.h1 variants={item} className='xl:text-5xl md:text-3xl text-3xl'>
                I{"'"}m <span className='blue-text-gradient'>Nathan</span>
            </motion.h1>
            <motion.h1 variants={item} className='xl:text-5xl md:text-3xl text-3xl'>
                Junior <span className='blue-text-gradient'>Developer</span>
            </motion.h1>
            <motion.p className='text-sm italic mb-10' variants={item}>
                I am a Junior Developer with 3 years of experience, 2 years through college with work Experience, and 1 year full time employment Experience.
            </motion.p>
        </motion.div>
        <motion.div
            className='w-32 h-10 mt-16 bg-[#ec008c] hover:bg-pink-600 transition-all ease-in duration-200 rounded-xl flex items-center justify-center cursor-pointer'
            initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2}}
            >
                <p>Hire Me</p>
        </motion.div>
        <motion.p
        initial= {{opacity:0}} animate={{opacity:1}} transition={{delay:1}}
        className='text-[12px] italic my-5 w-80 text-purple-300'
        >
            It works on my machine...
        </motion.p>
    </div>
  )
}

export default LeftPart