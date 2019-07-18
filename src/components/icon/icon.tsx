import React from 'react';
import './styles.css';

interface Props {
  type: string;
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

function Icon({ type, className, color, width, height }: Props) {
  const icons = createIcons();
  const isTypeAvailable = checkType(icons, type);

  if (!isTypeAvailable) {
    return <span style={{ fontSize: 12 }}>[icon '{type}' not found]</span>;
  }

  return (
    <span
      dangerouslySetInnerHTML={{ __html: icons[type] }}
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        lineHeight: 0,
        color: color,
        width: width ? `${width}px` : '14px',
        height: height ? `${height}px` : 'inherit',
      }}
      className={`svg-icon icon-${type}${className ? ` ${className}` : ``}`}
    />
  );

}

export default Icon;


function createIcons() {

  const requestSvgs = require.context('!svg-inline-loader!../../assets/icons', false, /\.svg$/);
  const svgsPaths = requestSvgs.keys();
  const icons: any = {};

  svgsPaths.forEach(path => (icons[path.slice(2, -4)] = requestSvgs(path)));

  return icons;
}

function checkType(icons: object, type: string) {
  const iconTypes = Object.keys(icons);
  const isAvailable = iconTypes.filter(iconType => iconType === type);

  return isAvailable.length > 0;
}
