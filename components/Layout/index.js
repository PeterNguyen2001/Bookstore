import dynamic from 'next/dynamic';
const Header = dynamic(() => import('./header'))
const Footer = dynamic(() => import('./footer'))

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main> {children}</main>
      <Footer />
    </div>
  );
}
