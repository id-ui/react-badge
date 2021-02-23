import * as React from 'react';

export interface BadgeProps {
    /**
     * Badge size
     * @default  1.5rem
     */
    size?: string;
    /**
     * Badge placement
     * @default topRight
     */
    placement?: 'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | 'bottomRight' | 'left' | 'leftTop' | 'leftBottom' | 'right' | 'rightTop' | 'rightBottom';
    /**
     * Badge backgroundColor
     * @default #9552D4
     */
    color?: string;
    /**
     * Badge className
     */
    className?: string;
    /**
     * Badge content
     */
    children?: React.ReactChildren;
}

export default class Badge extends React.Component<BadgeProps> {}