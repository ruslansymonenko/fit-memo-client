import LeftSidebar from '@/components/app/left-sidebar/LeftSidebar';
import RightSidebar from '@/components/app/right-sidebar/RightSidebar';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex align-center justify-between w-full h-full">
      <LeftSidebar />
      {children}
      <RightSidebar />
    </div>
  );
}
