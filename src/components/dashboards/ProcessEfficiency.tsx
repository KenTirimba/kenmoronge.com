'use client'

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const stageData = [
  { stage: 'Intake', cycletime: 2.4, target: 2.0, errors: 3.2 },
  { stage: 'Validation', cycletime: 1.8, target: 1.5, errors: 1.8 },
  { stage: 'Processing', cycletime: 4.2, target: 3.0, errors: 5.1 },
  { stage: 'Review', cycletime: 2.1, target: 2.0, errors: 2.4 },
  { stage: 'Approval', cycletime: 3.5, target: 2.5, errors: 4.0 },
  { stage: 'Output', cycletime: 1.2, target: 1.0, errors: 0.9 },
]

const radarData = [
  { metric: 'Speed', before: 55, after: 82 },
  { metric: 'Accuracy', before: 60, after: 91 },
  { metric: 'Compliance', before: 70, after: 88 },
  { metric: 'Throughput', before: 48, after: 79 },
  { metric: 'Automation', before: 30, after: 72 },
  { metric: 'Visibility', before: 40, after: 85 },
]

const kpis = [
  { label: 'Avg Cycle Time', value: '2.5 hrs', change: '↓ 32%', up: true },
  { label: 'Error Rate', value: '2.9%', change: '↓ 44%', up: true },
  { label: 'Throughput', value: '340/day', change: '↑ 28%', up: true },
  { label: 'SLA Compliance', value: '96%', change: '↑ 18pp', up: true },
]

type View = 'cycletime' | 'radar'

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-lg dark:border-slate-700 dark:bg-slate-800">
      <p className="mb-1 text-xs font-semibold text-slate-400">{label}</p>
      {payload.map((entry: any) => (
        <p key={entry.name} className="text-xs" style={{ color: entry.color }}>
          {entry.name}: <span className="font-bold">{entry.value} hrs</span>
        </p>
      ))}
    </div>
  )
}

export default function ProcessEfficiency() {
  const [view, setView] = useState<View>('cycletime')

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
              {kpi.change} post-improvement
            </p>
          </div>
        ))}
      </div>

      {/* Toggle */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
          {view === 'cycletime' ? 'Cycle Time by Stage (hrs)' : 'Process Health: Before vs After'}
        </p>
        <div className="flex rounded-lg border border-slate-200 dark:border-slate-700">
          {([['cycletime', 'Cycle Times'], ['radar', 'Health Radar']] as [View, string][]).map(([v, label]) => (
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
        {view === 'cycletime' ? (
          <BarChart data={stageData} barCategoryGap="30%">
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" strokeOpacity={0.5} />
            <XAxis dataKey="stage" tick={{ fontSize: 11 }} tickLine={false} axisLine={false} />
            <YAxis tick={{ fontSize: 11 }} tickLine={false} axisLine={false} unit=" h" />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="cycletime" name="Actual" radius={[4, 4, 0, 0]}>
              {stageData.map((entry, i) => (
                <Cell
                  key={i}
                  fill={entry.cycletime > entry.target ? '#ef4444' : '#1B3A6B'}
                />
              ))}
            </Bar>
            <Bar dataKey="target" name="Target" fill="#2DD4BF" radius={[4, 4, 0, 0]} opacity={0.5} />
          </BarChart>
        ) : (
          <RadarChart data={radarData}>
            <PolarGrid stroke="#e2e8f0" />
            <PolarAngleAxis dataKey="metric" tick={{ fontSize: 11 }} />
            <PolarRadiusAxis domain={[0, 100]} tick={{ fontSize: 9 }} />
            <Radar name="Before" dataKey="before" stroke="#94a3b8" fill="#94a3b8" fillOpacity={0.25} />
            <Radar name="After" dataKey="after" stroke="#1B3A6B" fill="#2DD4BF" fillOpacity={0.35} />
            <Tooltip />
          </RadarChart>
        )}
      </ResponsiveContainer>
      {view === 'cycletime' && (
        <p className="mt-3 text-center text-xs text-slate-400 dark:text-slate-500">
          Red bars = stages exceeding target cycle time
        </p>
      )}
    </div>
  )
}
