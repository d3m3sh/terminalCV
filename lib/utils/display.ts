'use client';

export function formatMultipleOutputs(items: any[], type: string) {
  return items.map(item => ({
    type,
    content: item
  }));
}