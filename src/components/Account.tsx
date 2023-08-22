import React from 'react';
import { AccountProps } from '../types/account.interface';
import '../Dashboard.scss';

export const Account: React.FC<AccountProps & { open: boolean }> = (props) => {
  return (
    <div className={props.open ? 'account' : 'account toggled'}>
      <img className={'avatar'} src={props.avatarPath} alt="avatar" />
      {props.open && (
        <section className="info">
          <span className="name" title={props.name}>
            {props.name}
          </span>
          <span className="email" title={props.email}>
            {props.email}
          </span>
        </section>
      )}
    </div>
  );
};
