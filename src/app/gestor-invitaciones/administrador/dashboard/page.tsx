import AppSidebarHeader from '@/components/components-admin/app-sidebar-header';
import { BreadcrumbItem } from '@/types';
import React from 'react'
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: 'gestor-invitaciones/administrador/dashboard',
    },
];
export default function Dashboard() {
    return (
        <>
            <AppSidebarHeader breadcrumbs={breadcrumbs} />
            <main className='px-8 py-6'>
                Hola
            </main>
        </>
    )
}
