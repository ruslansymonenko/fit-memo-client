import Sidebar from '@/components/app/sidebar/Sidebar';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex align-center justify-between w-full h-full">
      <Sidebar />
      {children}
    </div>
  );
}
