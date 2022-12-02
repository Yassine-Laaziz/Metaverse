"use client"

import styles from "../styles"
import { ExploreCard, TitleText, TypingText } from "../components"
import { motion } from "framer-motion"
import { staggerContainer } from "../utils/motion"
import { exploreWorlds } from "../constants"
import { useState } from "react"

const Explore = () => {
  const [active, setActive] = useState('world-2')

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          textStyles="text-center"
          title={
            <>
              choose the world you want
              <br className="md:block hidden" /> to explore
            </>
          }
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, i) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={i}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Explore
