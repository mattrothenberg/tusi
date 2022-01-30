import { useAnimationFrame } from "framer-motion";
import { useState } from "react";
import { degreesToRadians } from "../lib";

export function Basic(props: VariationProps) {
  const { radius, size } = props;
  const { width } = size;
  const [angle, setAngle] = useState(270);

  useAnimationFrame((t) => {
    setAngle((currAngle) => currAngle - 1);
  });

  const cx = width / 2 + (radius / 2) * Math.cos(degreesToRadians(angle));
  const cy = width / 2 + (radius / 2) * Math.sin(degreesToRadians(angle));

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
          className="stroke-gray-800 fill-transparent stroke-2"
          cx={cx}
          cy={cy}
          rx={radius / 2}
          ry={radius / 2}
        />
        <line
          x1={width / 2}
          y1={width / 2 + radius * Math.sin(degreesToRadians(angle))}
          x2={cx}
          y2={cy}
          className="stroke-pink-600 stroke-2"
        />
      </g>
    </>
  );
}
