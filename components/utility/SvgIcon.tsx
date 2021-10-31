const SvgIcon = ({path, size, viewBox='6 6 512 512', fill='currentColor', circle={cx: '14', cy: '14', fill: 'currentColor', r: '0'}}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox={viewBox}
			preserveAspectRatio="xMidYMid"
			>
			<circle
			  cx={circle.cx}
			  cy={circle.cy}
			  fill={circle.fill}
			  r={circle.r}
			/>
			<path d={path} fill={fill} />
	  </svg>
  )
}

export default SvgIcon;