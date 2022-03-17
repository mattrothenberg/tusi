export const degreesToRadians = (degrees: number) => (degrees * Math.PI) / 180;
export const radiansToDegrees = (radians: number) => (radians * 180) / Math.PI;

interface PtOnCircleParams {
  radius: number;
  offset?: number;
  angle: number;
}

export const pointOnCircle = (params: PtOnCircleParams) => {
  const { radius, offset = 0, angle = 0 } = params;

  return {
    x: offset + radius * Math.cos(degreesToRadians(angle)),
    y: offset + radius * Math.sin(degreesToRadians(angle)),
  };
};
