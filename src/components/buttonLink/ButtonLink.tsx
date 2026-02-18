import React from 'react';
import styles from './ButtonLink.module.css';

type ButtonLinkProps = {
  children: React.ReactNode;
};

export function ButtonLink({ children }: ButtonLinkProps) {
  return (
    <button className={styles.buttonLink}>
      {children}
    </button>
  );
}