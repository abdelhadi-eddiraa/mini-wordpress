import Transitions from '@/components/animatedLink/transitions';
import ComplexTemplate from '@/templates/sidebar/ComplexTemplate';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <Transitions>
      <ComplexTemplate children={children} />
    </Transitions>
  );
}
