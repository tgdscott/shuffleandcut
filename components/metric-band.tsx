interface Metric {
  label: string;
  value: string;
  delta?: string;
  tone?: 'positive' | 'neutral' | 'warning';
}

const toneClasses: Record<NonNullable<Metric['tone']>, string> = {
  positive: 'text-teal',
  neutral: 'text-midnight/70',
  warning: 'text-gold'
};

export function MetricBand({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="grid gap-4 rounded-3xl border border-midnight/10 bg-white/80 px-6 py-5 md:grid-cols-4">
      {metrics.map((metric) => (
        <div key={metric.label} className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-widest text-midnight/60">
            {metric.label}
          </span>
          <p className="price-grid text-2xl font-semibold text-midnight">{metric.value}</p>
          {metric.delta && (
            <p className={`text-xs font-medium ${metric.tone ? toneClasses[metric.tone] : 'text-midnight/60'}`}>
              {metric.delta}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
