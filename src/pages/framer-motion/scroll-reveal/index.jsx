import styles from "./index.module.scss";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import Header from "@components/elements/Header/Header";
import CodeLink from "@components/elements/CodeLink/CodeLink.jsx";

const dev = process.env.NODE_ENV !== "production";
const transition = { ease: [0.5, 0.01, -0.05, 0.9] };

const introVariant = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 100,
    transition: {
      duration: 2.75,
      delayChildren: 0.75,
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.75,
    },
  },
};

const titleVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2.75,
      ...transition,
    },
  },
  out: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 1,
    },
  },
};

const blockVariant = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: 1.75,
      ...transition,
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

const svgVariant = {
  initial: {
    opacity: 0,
    x: -100,
    rotate: -10,
  },
  in: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      delay: 0.5,
      duration: 2,
      ...transition,
    },
  },
  out: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 1,
    },
  },
};

const quoteVariant = {
  initial: {
    opacity: 0,
    y: 35,
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25,
      duration: 1.75,
      ...transition,
    },
  },
  out: {
    opacity: 0,
    y: 35,
    transition: {
      duration: 1,
    },
  },
};

export default function ScrollReveal() {
  const philosophers = [
    {
      name: "Theodor W. Adorno",
      image: "Adorno.svg",
      quote: "The task of art today is to bring chaos into order",
    },
    {
      name: "Albert Camus",
      image: "Camus.svg",
      quote:
        "Nobody realizes that some people expend tremendous energy merely to be normal.",
    },
    {
      name: "Gilles Deleuze",
      image: "Deleuze.svg",
      quote:
        "A concept is a brick. It can be used to build a courthouse of reason. Or it can be thrown through the window.",
    },
    {
      name: "Michel Foucault",
      image: "Foucault.svg",
      quote:
        "I don't feel that it is necessary to know exactly what I am. The main interest in life and work is to become someone else that you were not in the beginning.",
    },
    {
      name: "Georg Wilhelm Friedrich Hegel",
      image: "Hegel.svg",
      quote: "Education is the art of making man ethical.",
    },
    {
      name: "Immanuel Kant",
      image: "Kant.svg",
      quote:
        "All our knowledge begins with the senses, proceeds then to the understanding, and ends with reason. There is nothing higher than reason.",
    },
    {
      name: "Soren Kierkegaard",
      image: "Kierkegaard.svg",
      quote:
        "It is perfectly true, as philosophers say, that life must be understood backwards. But they forget the other proposition, that it must be lived forwards.",
    },
    {
      name: "Jean-Paul Sartre",
      image: "Sartre.svg",
      quote: "Freedom is what you do with what's been done to you.",
    },
    {
      name: "Socrates",
      image: "Socrates.svg",
      quote: "I was really too honest a man to be a politician and live.",
    },
    {
      name: "Slavoj Zizek",
      image: "Zizek.svg",
      quote: "I secretly think reality exists so we can speculate about it.",
    },
  ];
  let ran = 1;
  const words = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];
  useEffect(() => {
    const title = document.querySelector(".title");
    setInterval(() => {
      if (ran <= 10) {
        title.innerHTML = `${words[ran - 1]} Quotes`;
        ran++;
      } else {
        clearInterval();
      }
    }, [175 / ran]);
  });

  return (
    <>
      <Header
        title="Exploring Framer Motion"
        info="Framer Motion is a powerful motion library for React. I've created a few demos to become more familiar with it. This one is focused on hooking into the intersection observer to trigger an animation when an object is in the viewport. Being a react based library, Framer Motion allows for some advanced application animations. I.E. the full page transistions I've added to the entire site."
      >
        <CodeLink link="https://github.com/Radlad-io/experiments-site/tree/main/src/pages/framer-motion/scroll-reveal" />
      </Header>

      <motion.div className={styles.intro} variants={introVariant}>
        <div>
          <motion.h1
            className="title"
            variants={titleVariant}
            initial={"initial"}
            animate={"in"}
            exit={"out"}
          >
            Zero Quotes
          </motion.h1>
          <motion.p
            variants={titleVariant}
            initial={"initial"}
            animate={"in"}
            exit={"out"}
          >
            From notable male philosophers
          </motion.p>
        </div>
      </motion.div>
      <motion.p
        id={styles.scroll}
        animate={{
          y: [0, -15, 0],
          transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        Scroll Down
      </motion.p>
      <div className={styles.wrapper}>
        {philosophers.map((philosopher, index) => {
          return (
            <motion.div
              className={styles.flex}
              key={index}
              variants={blockVariant}
              initial={"initial"}
              whileInView={"in"}
              viewport={{ amount: "some", once: false }}
            >
              <div className={styles.block}>
                <motion.div
                  variants={svgVariant}
                  initial={"initial"}
                  whileInView={"in"}
                  viewport={{ amount: "some", once: false }}
                >
                  <Image
                    className={styles.image}
                    src={
                      dev
                        ? `http://localhost:3000/images/philosophers/SVG/${philosopher.image}`
                        : `https://experiments.kevinmerinsky.com/images/philosophers/SVG/${philosopher.image}`
                    }
                    height={600}
                    width={600}
                  ></Image>
                </motion.div>
              </div>
              <motion.div
                className={styles.block}
                variants={blockVariant}
                initial={"initial"}
                whileInView={"in"}
                viewport={{ amount: "some", once: false }}
              >
                <motion.blockquote
                  variants={quoteVariant}
                  initial={"initial"}
                  whileInView={"in"}
                  viewport={{ amount: "some", once: false }}
                >
                  <span>{`${index + 1}.`}</span>
                  {philosopher.quote}
                  <cite>{philosopher.name}</cite>
                </motion.blockquote>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
