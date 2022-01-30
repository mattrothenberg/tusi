import { useAnimationFrame } from "framer-motion";
import { useState } from "react";
import { PatternLines } from "@vx/pattern";
import { pointOnCircle } from "../lib";

export function Basic(props: VariationProps) {
  const { radius, size } = props;
  const { width } = size;
  const [angle, setAngle] = useState(270);

  useAnimationFrame((t) => {
    setAngle((currAngle) => currAngle - 1);
  });

  const rotation = pointOnCircle({
    angle,
    radius: radius / 2,
    offset: width / 2,
  });

  return (
    <>
      <g>
        <ellipse
          className="stroke-gray-800 stroke-2"
          cx={width / 2}
          cy={width / 2}
          rx={radius}
          ry={radius}
          fill="url(#lines)"
        />
        <ellipse
          className="stroke-gray-800 fill-offWhite stroke-2"
          cx={rotation.x}
          cy={rotation.y}
          rx={radius / 2}
          ry={radius / 2}
        />
        <line
          x1={width / 2}
          y1={pointOnCircle({ angle, radius, offset: width / 2 }).y}
          x2={rotation.x}
          y2={rotation.y}
          className="stroke-pink-600 stroke-2"
        />
        <PatternLines
          id="lines"
          height={8}
          width={8}
          stroke={"rgba(0, 0, 0, .25)"}
          strokeWidth={1}
          orientation={["diagonal"]}
        />
      </g>
    </>
  );
}
