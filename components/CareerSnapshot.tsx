"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

const items = [
  { number: 3, suffix: "+", label: "Years Experience", icon: "✦" },
  { number: 30, suffix: "+", label: "Events Managed", icon: "◇" },
  { number: 50, suffix: "+", label: "Campaigns Delivered", icon: "↗" },
  { number: 6, suffix: "+", label: "Brands Managed", icon: "◎" },
];

function AnimatedNumber({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  const isInView = useInView(ref, {
    once: false,
    margin: "-60px",
  });

  const count = useMotionValue(0);

  const displayValue = useTransform(count, (latest) => {
    return `${Math.round(latest)}${suffix}`;
  });

  useEffect(() => {
    let controls;

    if (isInView) {
      // Always restart from 0
      count.set(0);

      controls = animate(count, value, {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
      });
    } else {
      // Reset when section leaves viewport
      count.set(0);
    }

    return () => {
      controls?.stop();
    };
  }, [isInView, value, count]);

  return (
    <motion.strong ref={ref} className="block">
      {displayValue}
    </motion.strong>
  );
}

export default function CareerSnapshot() {
  return (
    <section className="snapshot-wrap">
      <div className="container">
        <motion.div
          className="snapshot-panel"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.p
            className="eyebrow centered"
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
            }}
            transition={{
              duration: 0.45,
            }}
          >
            Career Snapshot
          </motion.p>

          <div className="snapshot-grid">
            {items.map((item, index) => (
              <motion.div
                className="snapshot-item"
                key={item.label}
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: false,
                  amount: 0.35,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.div
                  className="snapshot-icon"
                  initial={{
                    opacity: 0,
                    scale: 0.75,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: false,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: 0.08 + index * 0.1,
                  }}
                >
                  {item.icon}
                </motion.div>

                <div>
                  <AnimatedNumber
                    value={item.number}
                    suffix={item.suffix}
                  />

                  <span>{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}