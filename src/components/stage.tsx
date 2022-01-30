import useDimensions from "react-cool-dimensions";

interface StageProps {
  render: (size: Size) => React.ReactNode;
}

export function Stage(props: StageProps) {
  const { render } = props;
  const { observe, width, height } = useDimensions();
  return (
    <div className="absolute inset-0 w-full h-full" ref={observe}>
      <svg width={width} height={height}>
        {width > 0 && height > 0 ? render({ width, height }) : null}
      </svg>
    </div>
  );
}
