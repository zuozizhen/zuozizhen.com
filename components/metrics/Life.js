import LifeClock from '@/components/LifeClock';
import MetricCard from '@/components/metrics/Card';

export default function Life() {

  const link = 'https://zuozizhen.com';

  return (
    <MetricCard header="生命在流逝">
      <LifeClock />
    </MetricCard>
  );
}
