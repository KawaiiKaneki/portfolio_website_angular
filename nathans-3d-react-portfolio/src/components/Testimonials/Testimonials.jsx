import React,{useRef} from 'react'
import {motion} from "framer-motion"

const Testimonials = () => {

  return (
    <div id='testimonials' className='md:w-10/12 mx-auto w-11/12 py-10 mb-32'>
        <motion.div initial={{opacity: 0, y: -150 }}
                    viewport={{ once: true, amount: 0.5 }}
                    whileInView={{opacity: .8, y: 0 }}
                    transition={{ duration: 0.6 }} 
                    className="border-b-2 text-4xl pink-text-gradient inline-block border-pink-600 mb-20">
                <h2 className=" p-1">Testimonials</h2>
        </motion.div>
        <div className='w-10/12 mx-auto'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-10'>
                <motion.div initial={{opacity: 0, x: -150 }}
                    viewport={{ once: true, amount: 0.5 }}
                    whileInView={{opacity: .8, x: 0 }}
                    transition={{ duration: 0.6 }}  
                    className='border-2  border-neutral-400 rounded-xl p-2 relative text-center'>
                    <p className='text-sm mb-8 mt-4 w-10/12 mx-auto text-neutral-300'>"Nathan is an exceptional software developer who consistently delivers high-quality work. His technical expertise and problem-solving skills are truly impressive. He is proactive in seeking out innovative solutions and goes above and beyond to meet project deadlines. Nathan is a valuable asset to any development team."</p>
                    <h1 className='mt-2 text-xl blue-text-gradient'>Sarah Thompson</h1>
                    <p className='mb-6 mt-1 text-sm italic text-neutral-400'>Senior Software Engineer</p>
                    <div className='w-10 h-10 absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
                        <img className='w-full h-full rounded-full object-cover object-center' src="/images/client1.jpg" alt="" />
                    </div>
                </motion.div>
                <motion.div initial={{opacity: 0, x: 150 }}
                    viewport={{ once: true, amount: 0.5 }}
                    whileInView={{opacity: .8, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className='border-2 border-neutral-400 rounded-xl p-2 relative text-center'>
                    <p className='text-sm mb-8 mt-4 w-10/12 mx-auto text-neutral-300'>"Working with Nathan has been a pleasure. He possesses a deep understanding of software development principles and applies them effectively in his work. Nathan's ability to collaborate with cross-functional teams and communicate complex ideas in a clear and concise manner is remarkable. I highly recommend him for any software development role."</p>
                    <h1 className='mt-2 text-xl blue-text-gradient'>Jason Lee</h1>
                    <p className='mb-6 mt-1 text-sm italic text-neutral-400'>Product Manager</p>
                    <div className='w-10 h-10 absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
                        <img className='w-full h-full rounded-full object-cover object-center' src="/images/client2.jpg" alt="" />
                    </div>
                </motion.div>
                <motion.div initial={{opacity: 0, x: -150 }}
                    viewport={{ once: true, amount: 0.5 }}
                    whileInView={{opacity: .8, x: 0 }}
                    transition={{ duration: 0.6 }}  
                    className='border-2  border-neutral-400 rounded-xl p-2 relative text-center'>
                    <p className='text-sm mb-8 mt-4 w-10/12 mx-auto text-neutral-300'>"Nathan is a highly talented software developer who consistently exceeds expectations. His attention to detail and commitment to writing clean, efficient code is truly commendable. He has a natural ability to identify and troubleshoot complex issues, making him an invaluable asset to our development team. I have no doubt that Nathan will continue to excel in his career."</p>
                    <h1 className='mt-2 text-xl blue-text-gradient'>Emily Carter</h1>
                    <p className='mb-6 mt-1 text-sm italic text-neutral-400'>Lead Software Architect</p>
                    <div className='w-10 h-10 absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
                        <img className='w-full h-full rounded-full object-cover object-center' src="/images/client3.jpg" alt="" />
                    </div>
                </motion.div>
                <motion.div initial={{opacity: 0, x: 150 }}
                    viewport={{ once: true, amount: 0.5 }}
                    whileInView={{opacity: .8, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className='border-2 border-neutral-400 rounded-xl p-2 relative text-center'>
                    <p className='text-sm mb-8 mt-4 w-10/12 mx-auto text-neutral-300'>"I had the pleasure of working closely with Nathan on a challenging software project, and I was consistently impressed by his technical prowess and dedication to quality. Nathan is a proactive problem-solver who approaches every task with enthusiasm and meticulousness. His strong analytical skills and ability to adapt quickly to changing requirements make him an invaluable team member."</p>
                    <h1 className='mt-2 text-xl blue-text-gradient'>David Miller</h1>
                    <p className='mb-6 mt-1 text-sm italic text-neutral-400'>Senior Software Developer</p>
                    <div className='w-10 h-10 absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
                        <img className='w-full h-full rounded-full object-cover object-center' src="/images/client4.jpg" alt="" />
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials