import { useMemo } from 'react'
import { GiMonsteraLeaf, GiOakLeaf, GiFallingLeaf, GiCurledLeaf } from 'react-icons/gi'

const ICONS = [GiMonsteraLeaf, GiOakLeaf, GiFallingLeaf, GiCurledLeaf]

export default function FloatingLeaves({ count = 10 }) {
  const leaves = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${(i * 11 + 5) % 95}%`,
        size: 14 + (i % 5) * 4,
        duration: 14 + (i % 6) * 3,
        delay: i * 1.4,
        Icon: ICONS[i % ICONS.length],
        opacity: 0.25 + (i % 4) * 0.08,
      })),
    [count],
  )

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {leaves.map(({ id, left, size, duration, delay, Icon, opacity }) => (
        <Icon
          key={id}
          className="floating-leaf text-accent"
          style={{
            left,
            top: '-40px',
            fontSize: size,
            opacity,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
        />
      ))}
    </div>
  )
}
