import React from 'react';
import DashboardSidebar from './_components/DashboardSidebar';

const DashboardLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
        <DashboardSidebar>
            {children}
        </DashboardSidebar>
    </div>
  )
}

export default DashboardLayout