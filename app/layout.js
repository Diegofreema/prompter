import Nav from '@/components/Nav';
import './globals.css';
import Provider from '@/components/Provider';

export const metadata = {
  title: 'Prompter',
  description: 'Discover and share AI prompts',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
