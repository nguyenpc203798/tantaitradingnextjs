import { SegmentParams } from 'next/dist/lib/metadata/types/metadata-interface.js';

declare module 'next/dist/lib/metadata/types/metadata-interface.js' {
  export interface PageProps {
    params?: Promise<SegmentParams>;
    searchParams?: Record<string, string | string[]>;
  }

  export interface LayoutProps {
    children?: React.ReactNode;
    params?: Promise<SegmentParams>;
  }
} 