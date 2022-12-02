"use client"

import { motion } from "framer-motion"
import styles from "../styles"
import { staggerContainer, fadeIn } from "../utils/motion"
import { TypingText, TitleText } from "../components"

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
    >
      <TypingText title="| People on the world" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] w-full"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-contain"
        />
        <div className="absolute bottom-[15%] right-[10%] 20[70px] h-[70px] p-[6px] rounded-full bg-[#5d6688]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-[10%] left-[10%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6688]">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-[40%] left-[42%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6688]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        {/* cards */}
        <div className="text-white absolute bottom-[10%] border-8 border-gray-300/25 rounded-[25px] bg-[url(/planet-02.png)] bg-cover h-[150px] p-2 flex items-end">
          <div className="h-[65%] flex flex-col justify-between">
            <div className="relative text-sm w-fit h-8">
              <div className="relative h-[100%] w-16 inline-block">
                <img
                  src="people-01.png"
                  alt="people"
                  className="w-8 h-8 absolute"
                />
                <img
                  src="people-02.png"
                  alt="people"
                  className="w-8 h-8 absolute left-1/4"
                />
                <img
                  src="people-03.png"
                  alt="people"
                  className="w-8 h-8 absolute left-1/2"
                />
              </div>
              <span className="align-super mx-4">264+ has joined</span>
            </div>
            <p className="text-center">The Upside Down</p>
          </div>
        </div>
        <div className="text-white absolute top-[10%] right-[15%] border-8 border-gray-300/25 rounded-[25px] bg-[url(/planet-02.png)] bg-cover h-[150px] p-2 flex items-end">
          <div className="h-[65%] flex flex-col justify-between">
            <div className="relative text-sm w-fit h-8">
              <div className="relative h-[100%] w-16 inline-block">
                <img
                  src="people-01.png"
                  alt="people"
                  className="w-8 h-8 absolute"
                />
                <img
                  src="people-02.png"
                  alt="people"
                  className="w-8 h-8 absolute left-1/4"
                />
                <img
                  src="people-03.png"
                  alt="people"
                  className="w-8 h-8 absolute left-1/2"
                />
              </div>
              <span className="align-super mx-4">264+ has joined</span>
            </div>
            <p className="text-center">Paradise Island</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
)

export default World
