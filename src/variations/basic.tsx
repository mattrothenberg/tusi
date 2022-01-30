export function Basic(props: VariationProps) {
  const { radius, size } = props;
  const { width } = size;
  return (
    <g>
      <ellipse
        className="stroke-gray-800 fill-transparent stroke-2"
        cx={width / 2}
        cy={width / 2}
        rx={radius}
        ry={radius}
      />
    </g>
  );
}
