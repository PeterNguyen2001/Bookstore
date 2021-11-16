import Header from './header'
import Footer from './footer'
import React, { useState } from 'react'
export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main> {children}</main>
      <Footer />
    </div>
  );
}
