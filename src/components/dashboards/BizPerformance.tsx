'use client'

import { useState } from 'react'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ReferenceLine,
} from 'recharts'
import { cn } from '@/lib/utils'

const monthlyData = [
  { month: 'Jan', revenue: 420, target: 400, expenses: 280 },
  { month: 'Feb', revenue: 380, target: 400, expenses: 260 },
  { month: 'Mar', revenue: 510, target: 450, expenses: 310 },
  { month: 'Apr', revenue: 470, target: 450, expenses: 290 },
  { month: 'May', revenue: 530, target: 480, expenses: 320 },
  { month: 'Jun', revenue: 490, target: 480, expenses: 305 },
  { month: 'Jul', revenue: 560, target: 500, expenses: 340 },
  { month: 'Aug', revenue: 520, target: 500, expenses: 315 },
  { month: 'Sep', revenue: 590, target: 540, expenses: 355 },
  { month: 'Oct', revenue: 610, target: 540, expenses: 370 },
  { month: 'Nov', revenue: 580, target: 560, expenses: 350 },
  { month: 'Dec', revenue: 640, target: 560, expenses: 380 },
]

const kpis = [
  { label: 'Total Revenue', value: 'KES 6.3M', change: '+18%', up: true },
  { label: 'Avg Monthly', value: 'KES 525K', change: '+12%', up: true },
  { label: 'Target Hit Rate', value: '83%', change: '+5pp', up: true },
  { label: 'Avg Margin', value: '38%', change: '-2pp', up: false },
]

type ChartView = 'bar' | 'line'

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-lg dark:border-slate-700 dark:bg-slate-800">
      <p className="mb-2 text-xs font-semibold text-slate-400">{label}</p>
      {payload.map((entry: any) => (
        <p key={entry.name} className="text-xs" style={{ color: entry.color }}>
          {entry.name}: <span className="font-bold">KES {entry.value}K</span>
        </p>
      ))}
    </div>
  )
}

export default function BizPerformance() {
  const [view, setView] = useState<ChartView>('bar')

  return (
    <div className="p-6">
      {/* KPI strip */}
      <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60"
          >
            <p className="text-xs text-slate-400 dark:text-slate-500">{kpi.label}</p>
            <p className="mt-1 font-display text-xl font-bold text-navy-600 dark:text-slate-100">
              {kpi.value}
            </p>
            <p className={cn('mt-0.5 text-xs font-semibold', kpi.up ? 'text-teal-500' : 'text-red-400')}>
              {kpi.change} vs last year
            </p>
          </div>
        ))}
      </div>

      {/* Toggle */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
          Revenue vs Target vs Expenses
        </p>
        <div className="flex rounded-lg border border-slate-200 dark:border-slate-700">
          {(['bar', 'line'] as ChartView[]).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={cn(
                'px-4 py-1.5 text-xs font-medium capitalize transition-colors first:rounded-l-lg last:rounded-r-lg',
                view === v
                  ? 'bg-navy-600 text-white dark:bg-teal-400 dark:text-navy-900'
                  : 'text-slate-500 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800'
              )}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={320}>
        {view === 'bar' ? (
          <BarChart data={monthlyData} barCategoryGap="30%">
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" strokeOpacity={0.5} />
            <XAxis dataKey="month" tick={{ fontSize: 11 }} tickLine={false} axisLine={false} />
            <YAxis tick={{ fontSize: 11 }} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}K`} />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ fontSize: 11 }} />
            <Bar dataKey="revenue" name="Revenue" fill="#1B3A6B" radius={[4, 4, 0, 0]} />
            <Bar dataKey="target" name="Target" fill="#2DD4BF" radius={[4, 4, 0, 0]} />
            <Bar dataKey="expenses" name="Expenses" fill="#F59E0B" radius={[4, 4, 0, 0]} />
          </BarChart>
        ) : (
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" strokeOpacity={0.5} />
            <XAxis dataKey="month" tick={{ fontSize: 11 }} tickLine={false} axisLine={false} />
            <YAxis tick={{ fontSize: 11 }} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}K`} />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ fontSize: 11 }} />
            <ReferenceLine y={500} stroke="#94a3b8" strokeDasharray="4 4" label={{ value: 'Avg target', fontSize: 10 }} />
            <Line dataKey="revenue" name="Revenue" stroke="#1B3A6B" strokeWidth={2.5} dot={false} />
            <Line dataKey="target" name="Target" stroke="#2DD4BF" strokeWidth={2} strokeDasharray="5 5" dot={false} />
            <Line dataKey="expenses" name="Expenses" stroke="#F59E0B" strokeWidth={2} dot={false} />
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  )
}
