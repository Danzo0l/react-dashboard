import React from 'react';
import { MainProps } from '../types/main.interface';
import '../Dashboard.scss';

const Main: React.FC<MainProps> = (props) => (
  <main className="main">{props.children}</main>
);

export { Main };
