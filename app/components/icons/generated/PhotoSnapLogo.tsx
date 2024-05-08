import React from 'react';

interface PhotoSnapLogoProps extends React.SVGAttributes<SVGElement> {
  className?: string;
}

const PhotoSnapLogo: React.FC<PhotoSnapLogoProps> = ({
  className,
  ...props
}) => (
  <svg className={className} {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 16L9.5 0L19 16H0Z"
      fill="url(#paint0_linear_0_20)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_0_20"
        x1="9.5"
        y1="20"
        x2="16.6529"
        y2="3.01176"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFC593" />
        <stop offset="0.519452" stopColor="#BC7198" />
        <stop offset="1" stopColor="#5A77FF" />
      </linearGradient>
    </defs>
  </svg>
);

export default PhotoSnapLogo;
