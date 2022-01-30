import useDimensions from "react-cool-dimensions";

interface StageProps {
  render: (size: Size) => React.ReactNode;
}

export function Stage(props: StageProps) {
  const { render } = props;
  const { observe, width, height } = useDimensions();

  return (
    <div
      className="border border-gray-900 absolute inset-0 w-full h-full"
      ref={observe}
    >
      <svg width={width} height={height}>
        {render({ width, height })}
      </svg>
    </div>
  );
}
