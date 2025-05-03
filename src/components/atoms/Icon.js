/**
 * Icon 元件
 * @param {Object} props
 * @param {string} props.name - 圖標名稱，例如：'up', 'down'
 * @param {boolean} [props.isFull=false] - 是否跟著父元素寬度
 * @param {string} [props.className] - 額外的樣式類名
 */
const Icon = ({ name, isFull = false, className = '' }) => {
  const svgName = name.includes('/') ? `#${name}` : `#/${name}`

  return (
    <svg
      className={className}
      width={isFull ? '100%' : 24}
      height={isFull ? '100%' : 24}
      aria-hidden="true"
      title={name}
    >
      <use xlinkHref={svgName} fill="currentColor" />
    </svg>
  )
}

export default Icon 