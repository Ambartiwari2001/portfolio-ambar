import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Icons = {
  github: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 20}
      height={props.size || 20}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
  linkedin: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 20}
      height={props.size || 20}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  twitter: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 20}
      height={props.size || 20}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  ),
  mail: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 20}
      height={props.size || 20}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  external: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 20}
      height={props.size || 20}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
  arrowRight: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 20}
      height={props.size || 20}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  arrowUpRight: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 20}
      height={props.size || 20}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  ),
  chevronUp: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 20}
      height={props.size || 20}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="18 15 12 9 6 15" />
    </svg>
  ),
  code: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 20}
      height={props.size || 20}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  terminal: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 20}
      height={props.size || 20}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  ),
  sparkles: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 20}
      height={props.size || 20}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />
    </svg>
  ),
  copy: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 20}
      height={props.size || 20}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  ),
  check: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 20}
      height={props.size || 20}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  download: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 20}
      height={props.size || 20}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  ),
  database: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 20}
      height={props.size || 20}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  layout: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 20}
      height={props.size || 20}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  ),
  layers: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 20}
      height={props.size || 20}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  cpu: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 20}
      height={props.size || 20}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="15" x2="23" y2="15" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="15" x2="4" y2="15" />
    </svg>
  ),
  server: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 20}
      height={props.size || 20}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  cloud: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 20}
      height={props.size || 20}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  zap: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 20}
      height={props.size || 20}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  shield: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 20}
      height={props.size || 20}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  box: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 20}
      height={props.size || 20}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  globe: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 20}
      height={props.size || 20}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  menu: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 20}
      height={props.size || 20}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),
  close: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 20}
      height={props.size || 20}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  motion: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 20}
      height={props.size || 20}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  ),
  react: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 20}
      height={props.size || 20}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(150 12 12)" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  ),
  next: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 20}
      height={props.size || 20}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9 8v8l8-8v8" />
    </svg>
  ),
  tailwind: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 20}
      height={props.size || 20}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 6c-3 0-5 2-6 5 2-1 4-1 6 0 1.5.8 2.5 2 4.5 2 3 0 5-2 6-5-2 1-4 1-6 0-1.5-.8-2.5-2-4.5-2z" />
      <path d="M6 13c-3 0-5 2-6 5 2-1 4-1 6 0 1.5.8 2.5 2 4.5 2 3 0 5-2 6-5-2 1-4 1-6 0-1.5-.8-2.5-2-4.5-2z" />
    </svg>
  ),
  git: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 20}
      height={props.size || 20}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="6" y1="9" x2="6" y2="15" />
      <path d="M18 15a9 9 0 0 0-9-9" />
    </svg>
  ),
  api: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 20}
      height={props.size || 20}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 14.5a2.5 2.5 0 0 1 5 0V17H4z" />
      <path d="M15 14.5a2.5 2.5 0 0 1 5 0V17h-5z" />
      <path d="M9.5 7A2.5 2.5 0 0 1 12 4.5a2.5 2.5 0 0 1 2.5 2.5V9.5h-5z" />
      <line x1="12" y1="9.5" x2="12" y2="14.5" />
    </svg>
  ),
  figma: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 20}
      height={props.size || 20}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    </svg>
  ),
};

export function DynamicIcon({ name, ...props }: { name: string } & IconProps) {
  const IconComponent = (Icons as Record<string, React.FC<IconProps>>)[name] || Icons.sparkles;
  return <IconComponent {...props} />;
}
