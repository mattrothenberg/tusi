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

  const rotation = pointOnCircle({
    angle,
    radius: radius / 2,
    offset: width / 2,
  });

  const linePoints = [
    pointOnCircle({ angle: 180, radius, offset: width / 2 }),
    pointOnCircle({ angle: 0, radius, offset: width / 2 }),
  ];

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
          cx={rotation.x}
          cy={rotation.y}
          rx={radius / 2}
          ry={radius / 2}
        />

        <motion.line
          x1={linePoints[0].x}
          y1={linePoints[0].y}
          x2={linePoints[1].x}
          y2={linePoints[1].y}
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
            strokeDashoffset: linePoints[1].x - linePoints[0].x,
          }}
          animate={{
            strokeDashoffset: 8,
          }}
        />
        <line
          y1={width / 2}
          x1={width / 2 + radius * Math.cos(degreesToRadians(angle))}
          x2={rotation.x}
          y2={rotation.y}
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
