import { StrictMode } from 'react';
import { ClickProvider } from './items/ClickContext';

interface Props {
  children: React.ReactNode;
}

const allProviders: Record<string, React.ComponentType<{ children: React.ReactNode }>> = {
  strict: StrictMode,
  loading: ClickProvider,
};

const providerOrder = ['strict', 'router', 'loading'];

const AppProviders = ({ children }: Props) => {
  return providerOrder.reduceRight((acc, key) => {
    const Provider = allProviders[key];
    if (!Provider) {
      console.warn(`Provider "${key}" is not registered in allProviders`);
      return acc;
    }
    return <Provider>{acc}</Provider>;
  }, children);
};

export default AppProviders;
