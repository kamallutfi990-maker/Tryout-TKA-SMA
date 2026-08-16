import React, { useEffect } from 'react';

const SecurityWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // 1. Disable right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 2. Disable text selection / copying
    const handleSelectStart = (e: Event) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('selectstart', handleSelectStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('selectstart', handleSelectStart);
    };
  }, []);

  return <div className="select-none">{children}</div>;
};

export default SecurityWrapper;
