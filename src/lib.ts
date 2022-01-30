export const degreesToRadians = (degrees: number) => (degrees * Math.PI) / 180;
export const radiansToDegrees = (radians: number) => (radians * 180) / Math.PI;

export const pointOnCircle = (radius: number, angle: number) => {
  return {
    x: radius * Math.cos(degreesToRadians(angle)),
    y: radius * Math.sin(degreesToRadians(angle)),
  };
};
