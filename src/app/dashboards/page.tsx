import { Metadata } from 'next'
import DashboardsClient from './DashboardsClient'

export const metadata: Metadata = {
  title: 'Dashboards',
  description:
    'Interactive business intelligence dashboards — business performance, process efficiency, and market intelligence.',
}

export default function DashboardsPage() {
  return <DashboardsClient />
}
