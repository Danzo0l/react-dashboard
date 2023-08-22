declare module '*.scss' {
  const content: { [key: string]: string };
  export = content;
}

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.png?inline' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}
