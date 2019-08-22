declare module 'react-sizes' {
  export interface Sizes {
    width: number | false;
    height: number | false;
  }
  type mapSizesToProps<SP extends object> = (sizes: Sizes) => SP;

  export function withSizes<SP extends object, P extends SP>(
    mapSizesToProps: mapSizesToProps<SP>,
  ): (component: React.ComponentType<P>) => React.ComponentType<P>;

  export default withSizes;
}