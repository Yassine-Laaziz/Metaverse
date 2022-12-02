"use client"
import styles from "../styles"
import { motion } from "framer-motion"
import { staggerContainer } from "../utils/motion"
import { TypingText, TitleText, InsightCard } from "../components"
import { insights } from "../constants"

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| insights" textStyles="text-center" />
      <TitleText title="insight About Metaverse" textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insight, i) => (
          <InsightCard key={`insight-${i}`} {...insight} index={i + 1} />
        ))}
      </div>
    </motion.div>
  </section>
)

export default Insights
