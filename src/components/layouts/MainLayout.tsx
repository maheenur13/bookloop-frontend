import React, { FC, ReactNode } from 'react';
import { Footer, Header } from '../common';

type PropsType = {
  children: ReactNode;
};

export const MainLayout: FC<PropsType> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
