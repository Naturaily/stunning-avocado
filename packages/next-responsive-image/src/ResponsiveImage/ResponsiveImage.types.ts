export type AspectRatio = [number, number];
export type ResponsiveAspectRatio = AspectRatio | [AspectRatio, AspectRatio?, AspectRatio?];
export type AspectRatioProp = 'fill' | ResponsiveAspectRatio;
