import { motion, useAnimationFrame } from "framer-motion";
import { useState } from "react";
import { degreesToRadians, pointOnCircle } from "../lib";

export function Dashed(props: VariationProps) {
  const { radius, size } = props;
  const { width } = size;
  const [angle, setAngle] = useState(270);

  useAnimationFrame((t) => {
    setAngle((currAngle) => currAngle - 3);
  });

  const cx = width / 2 + (radius / 2) * Math.cos(degreesToRadians(angle));
  const cy = width / 2 + (radius / 2) * Math.sin(degreesToRadians(angle));

  const linePoints = [pointOnCircle(radius, 180), pointOnCircle(radius, 0)];

  return (
    <>
      <g>
        <ellipse
          className="stroke-gray-800 fill-transparent stroke-2"
          cx={width / 2}
          cy={width / 2}
          rx={radius}
          ry={radius}
        />
        <ellipse
          className="stroke-gray-800 fill-offWhite stroke-2"
          cx={cx}
          cy={cy}
          rx={radius / 2}
          ry={radius / 2}
        />

        <motion.line
          x1={linePoints[0].x + width / 2}
          y1={linePoints[0].y + width / 2}
          x2={linePoints[1].x + width / 2}
          y2={linePoints[1].y + width / 2}
          className="stroke-gray-400 stroke-2 fill-transparent"
          strokeDasharray={8}
          transition={{
            type: "tween",
            ease: "linear",
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
          }}
          initial={{
            strokeDashoffset:
              linePoints[1].x + width / 2 - linePoints[0].x + width / 2,
          }}
          animate={{
            strokeDashoffset: 8,
          }}
        />
        <line
          y1={width / 2}
          x1={width / 2 + radius * Math.cos(degreesToRadians(angle))}
          x2={cx}
          y2={cy}
          className="stroke-pink-600 stroke-2"
        />
        <ellipse
          cx={width / 2 + radius * Math.cos(degreesToRadians(angle))}
          cy={width / 2}
          rx={8}
          ry={8}
          className="fill-pink-600"
        />
      </g>
    </>
  );
}
