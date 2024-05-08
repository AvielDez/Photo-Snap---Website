import React from 'react';

interface RightArrowProps extends React.SVGAttributes<SVGElement> {
  className?: string;
}

const RightArrow: React.FC<RightArrowProps> = ({ className, ...props }) => (
  <svg className={className} {...props}>
    <path d="M0 7H41.864" stroke="black" />
    <path d="M35.4282 1L41.4282 7L35.4282 13" stroke="black" />
  </svg>
);

export default RightArrow;
