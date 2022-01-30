import { motion, Transition } from "framer-motion";
import { degreesToRadians } from "../lib";

const transition: Transition = {
  duration: 20,
  repeat: Infinity,
  type: "tween",
  repeatType: "loop",
  ease: "linear",
  repeatDelay: 0,
};

export function Dots(props: VariationProps) {
  const { radius, size: stageSize } = props;
  const size = stageSize.width;
  const halfSize = size / 2;
  const angles = [180, 210, 240, 270, 300, 330, 360, 30, 60, 90, 120, 150];
  const origin = `${halfSize}px ${halfSize}px`;

  return (
    <motion.g
      animate={{ rotate: 360, originX: origin }}
      transition={transition}
      key={size}
    >
      {angles.map((angle, i) => {
        return (
          <motion.ellipse
            key={angle}
            animate={{
              rx: [8, 10],
              ry: [8, 10],
              cx: [
                radius * Math.cos(degreesToRadians(angle)) + halfSize,
                radius * Math.cos(degreesToRadians(angle + 150 + 15)) +
                  halfSize,
              ],
              cy: [
                radius * Math.sin(degreesToRadians(angle)) + halfSize,
                radius * Math.sin(degreesToRadians(angle + 150 + 15)) +
                  halfSize,
              ],
            }}
            transition={{
              repeat: Infinity,
              type: "tween",
              repeatType: "mirror",
              repeatDelay: 0.2 * angles.length,
              delay: 0.2 * i,
            }}
            className="fill-transparent stroke-gray-800 stroke-2"
          />
        );
      })}
    </motion.g>
  );
}
