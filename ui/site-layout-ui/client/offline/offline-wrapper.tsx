'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadCry } from '@fortawesome/free-regular-svg-icons';
import { PropsWithChildren, useEffect, useState } from 'react';

export function OfflineWrapper({ children }: Partial<PropsWithChildren>) {
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    const updateState = (isOffline: boolean) => setOffline(isOffline);

    if (window) {
      updateState(!window.navigator.onLine);
      window.addEventListener('online', () => updateState(false));
      window.addEventListener('offline', () => updateState(true));

      return () => {
        window.removeEventListener('online', () => updateState(false));
        window.removeEventListener('offline', () => updateState(true));
      };
    }
  }, []);

  children ??= (
    <div className="fixed top-0 left-0 w-full bg-hallpass-background z-99999 shadow-lg shadow-hallpass-error">
      <div className="flex justify-center items-center gap-2 py-2 w-full bg-hallpass-error/10 text-hallpass-error-dark text-center text-sm">
        <span>
          <FontAwesomeIcon icon={faSadCry} />
        </span>
        <strong className="uppercase">Offline</strong>
        <span>Please check your Internet connection</span>
      </div>
    </div>
  );

  if (offline) {
    return children;
  }
  return <div className="online"></div>;
}
