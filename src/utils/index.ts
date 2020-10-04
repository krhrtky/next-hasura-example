import { useMemo } from 'react';

export const useClassNames = (...names: ReadonlyArray<string | undefined>) =>
  useMemo(() => names.filter(name => name != null).join(' '), [names]);
