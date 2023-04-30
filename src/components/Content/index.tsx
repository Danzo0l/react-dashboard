import { ContentProps } from '../../types';

const Content = (props: ContentProps) => {
  return <main>{props.children}</main>;
};

export default Content;
