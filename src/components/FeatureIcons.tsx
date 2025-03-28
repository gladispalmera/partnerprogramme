
import React from 'react';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export const CheckIcon = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex justify-center", className)}>
      <Check className="text-green-500 w-6 h-6" strokeWidth={3} />
    </div>
  );
};

export const CrossIcon = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex justify-center", className)}>
      <X className="text-red-500 w-6 h-6" strokeWidth={3} />
    </div>
  );
};
