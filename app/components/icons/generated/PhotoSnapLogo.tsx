
import React from 'react';

interface PhotoSnapLogoProps extends React.SVGAttributes<SVGElement> {
  className?: string;
}

const PhotoSnapLogo: React.FC<PhotoSnapLogoProps> = ({ className, ...props }) => (
  <svg className={className} {...props}>
    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 16L9.5 0L19 16H0Z" fill="url(#paint0_linear_0_20)"/>
<defs>
<linearGradient id="paint0_linear_0_20" x1="9.5" y1="20" x2="16.6529" y2="3.01176" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFC593"/>
<stop offset="0.519452" stop-color="#BC7198"/>
<stop offset="1" stop-color="#5A77FF"/>
</linearGradient>
</defs>
</svg>

  </svg>
);

export default PhotoSnapLogo;
