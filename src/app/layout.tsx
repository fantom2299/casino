
import { SidebarProvider } from '@/Context/SidebarContext';
import Layout from '@/components/Layout';
import './globals.css';

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
    <body>
    <SidebarProvider>
      <Layout>
        {children}
      </Layout>
    </SidebarProvider>
    </body>
    </html>
  );
}
