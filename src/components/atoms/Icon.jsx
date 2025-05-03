import { useEffect, useState } from 'react'

export default function AtomIcon({ name, className = '' }) {
  const [svgContent, setSvgContent] = useState(null)

  useEffect(() => {
    if (!name) return
    fetch(`/icons/${name}.svg`)
      .then(res => res.text())
      .then(setSvgContent)
      .catch(() => setSvgContent(null)) // optional: handle missing icon
  }, [name])

  if (!svgContent) return null

  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: svgContent }}
      aria-hidden="true"
    />
  )
}
