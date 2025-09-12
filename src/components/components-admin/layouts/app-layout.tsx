'use client'
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';
import AppSidebarLayout from './app/app-sidebar-layout';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default function AppLayoutInvitations({ children, breadcrumbs, ...props }: AppLayoutProps) {
  return (
    <AppSidebarLayout breadcrumbs={breadcrumbs} {...props}>
      {children}
    </AppSidebarLayout>
  );
}
