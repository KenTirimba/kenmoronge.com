'use client'

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from 'recharts'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const segmentData = [
  { name: 'Enterprise', value: 38, color: '#1B3A6B' },
  { name: 'SME', value: 29, color: '#2DD4BF' },
  { name: 'Startup', value: 18, color: '#F59E0B' },
  { name: 'Government', value: 15, color: '#8b5cf6' },
]

const growthData = [
  { quarter: 'Q1 23', enterprise: 24, sme: 18, startup: 10 },
  { quarter: 'Q2 23', enterprise: 27, sme: 20, startup: 12 },
  { quarter: 'Q3 23', enterprise: 30, sme: 23, startup: 15 },
  { quarter: 'Q4 23', enterprise: 32, sme: 25, startup: 14 },
  { quarter: 'Q1 24', enterprise: 35, sme: 27, startup: 16 },
  { quarter: 'Q2 24', enterprise: 38, sme: 29, startup: 18 },
]

const kpis = [
  { label: 'Total Market Size', value: '$2.4B', change: '↑ 14% YoY', up: true },
  { label: 'Top Segment', value: 'Enterprise', change: '38% share', up: true },
  { label: 'Fastest Growing', value: 'Startup', change: '↑ 80% YoY', up: true },
  { label: 'Projected 2025', value: '$2.9B', change: '↑ 21%', up: true },
]

type View = 'share' | 'growth'

const RADIAN = Math.PI / 180
const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }: any) => {
  const r = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + r * Math.cos(-midAngle * RADIAN)
  const y = cy + r * Math.sin(-midAngle * RADIAN)
  return percent > 0.1 ? (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight={600}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  ) : null
}

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-lg dark:border-slate-700 dark:bg-slate-800">
      {payload.map((entry: any) => (
        <p key={entry.name} className="text-xs" style={{ color: entry.color }}>
          {entry.name}: <span className="font-bold">{entry.value}%</span>
        </p>
      ))}
    </div>
  )
}

export default function MarketIntel() {
  const [view, setView] = useState<View>('share')

  return (
    <div className="p-6">
      {/* KPIs */}
      <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60">
            <p className="text-xs text-slate-400 dark:text-slate-500">{kpi.label}</p>
            <p className="mt-1 font-display text-xl font-bold text-navy-600 dark:text-slate-100">
              {kpi.value}
            </p>
            <p className={cn('mt-0.5 text-xs font-semibold', kpi.up ? 'text-teal-500' : 'text-red-400')}>
              {kpi.change}
            </p>
          </div>
        ))}
      </div>

      {/* Toggle */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
          {view === 'share' ? 'Market Share by Segment' : 'Segment Growth Trend'}
        </p>
        <div className="flex rounded-lg border border-slate-200 dark:border-slate-700">
          {([['share', 'Share'], ['growth', 'Growth']] as [View, string][]).map(([v, label]) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={cn(
                'px-4 py-1.5 text-xs font-medium transition-colors first:rounded-l-lg last:rounded-r-lg',
                view === v
                  ? 'bg-navy-600 text-white dark:bg-teal-400 dark:text-navy-900'
                  : 'text-slate-500 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800'
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={320}>
        {view === 'share' ? (
          <PieChart>
            <Pie
              data={segmentData}
              cx="50%"
              cy="50%"
              outerRadius={130}
              dataKey="value"
              labelLine={false}
              label={renderLabel}
            >
              {segmentData.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number) => [`${value}%`, 'Market Share']}
            />
            <Legend
              formatter={(value) => <span style={{ fontSize: 11 }}>{value}</span>}
            />
          </PieChart>
        ) : (
          <AreaChart data={growthData}>
            <defs>
              <linearGradient id="gEnt" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1B3A6B" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#1B3A6B" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gSme" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2DD4BF" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#2DD4BF" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gStart" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#F59E0B" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" strokeOpacity={0.5} />
            <XAxis dataKey="quarter" tick={{ fontSize: 11 }} tickLine={false} axisLine={false} />
            <YAxis tick={{ fontSize: 11 }} tickLine={false} axisLine={false} unit="%" />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ fontSize: 11 }} />
            <Area type="monotone" dataKey="enterprise" name="Enterprise" stroke="#1B3A6B" fill="url(#gEnt)" strokeWidth={2} />
            <Area type="monotone" dataKey="sme" name="SME" stroke="#2DD4BF" fill="url(#gSme)" strokeWidth={2} />
            <Area type="monotone" dataKey="startup" name="Startup" stroke="#F59E0B" fill="url(#gStart)" strokeWidth={2} />
          </AreaChart>
        )}
      </ResponsiveContainer>
    </div>
  )
}
