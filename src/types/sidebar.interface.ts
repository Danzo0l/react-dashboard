import { AccountProps } from './account.interface';

export interface SidebarProps {
  logo?: string;
  children?: JSX.Element[] | JSX.Element;
  toggledItems?: JSX.Element[] | JSX.Element;
  account?: AccountProps;
}
