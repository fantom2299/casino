'use client';

import { useSidebar } from '@/Context/SidebarContext';
import Sidebar from '@/components/sidebar';
import Header from '@/components/Headers';
import BannerSection_one from '@/components/BannerSection_one';
import Article from "@/components/article";



export default function Layout({ children }: { children: React.ReactNode }) {
  const { isOpen } = useSidebar();
  const sidebarWidth = 300;
  const shiftedStyle = isOpen
    ? { marginLeft: sidebarWidth, width: `calc(100% - ${sidebarWidth}px)` }
    : { width: '100%' };

  return (
    <div className="min-h-screen">

      <Sidebar />


      <div
        className="transition-[margin,width] duration-200 ease-out"
        style={shiftedStyle}
      >

        <Header />


        <main className="overflow-x-hidden">

          <div className="mx-auto  px-4 sm:px-6 lg:px-8 my-8">
            <BannerSection_one
              bgSrc="/header-banner.png"
              fgSrc="/header-banner-img.png"
              height={408}
              ctaHref="https://example.com"
            />

            <Article />

            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
