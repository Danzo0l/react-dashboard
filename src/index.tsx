import React from 'react';
import { DashboardProps } from './types/dashboard.interface';
import './Dashboard.scss';

const Dashboard: React.FC<DashboardProps> = (props) => (
  <div id="dashboard">{props.children}</div>
);

export { Dashboard };
