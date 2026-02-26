import React from 'react';

interface CoffeeCodeLogoProps extends React.SVGProps<SVGSVGElement> {}

export const CoffeeCodeLogo: React.FC<CoffeeCodeLogoProps> = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      {...props}
    >
      {/* Brutalist Coffee Cup */}
      <path d="M25 25h40v40c0 5-5 10-10 10H35c-5 0-10-5-10-10V25z" fill="currentColor" stroke="none" />
      <path d="M25 25h40v40c0 5-5 10-10 10H35c-5 0-10-5-10-10V25z" />
      
      {/* Cup Handle */}
      <path d="M65 35h10v20H65" />
      
      {/* Steam / Code brackets */}
      <path d="M35 15l-5 5 5 5" strokeWidth="3" />
      <path d="M55 15l5 5-5 5" strokeWidth="3" />
      <path d="M45 10v15" strokeWidth="3" />

      {/* Code symbol inside the cup (inverted color since cup is filled) */}
      <text x="45" y="55" fontSize="20" fontWeight="900" textAnchor="middle" fill="var(--background)" stroke="none" fontFamily="monospace">
        &lt;/&gt;
      </text>
    </svg>
  );
};
