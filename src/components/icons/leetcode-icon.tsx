
import type { LucideProps } from 'lucide-react';
import React from 'react';

export const LeetCodeIcon = React.forwardRef<SVGSVGElement, Omit<LucideProps, 'ref'>>(
  (props, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || props.width || 24}
      height={props.size || props.height || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={props.strokeWidth || 2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props} // Spread props to allow className, etc.
    >
      {/* 
        This SVG aims to represent the LeetCode symbol in a simplified, stroke-based way.
        It consists of a vertical spine on the left, and three horizontal arms:
        - A top arm.
        - A middle arm (longest).
        - A bottom arm.
        This forms a shape similar to a stylized 'E'.
      */}
      <path d="M7 4V20" />   {/* Vertical spine */}
      <path d="M7 4H12" />   {/* Top arm */}
      <path d="M7 20H12" />   {/* Bottom arm */}
      <path d="M7 12H16" />  {/* Middle arm (longest) */}
    </svg>
  )
);
LeetCodeIcon.displayName = 'LeetCodeIcon';
