import { useEffect, useState } from 'react'

// Hook
export default function useWindowSize() {
  const [width, setWidth] = useState<number | null>(typeof window !== 'undefined' ? window.innerWidth : null)
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width to state
      setWidth(typeof window !== 'undefined' ? window.innerWidth : null)
    }
    // Add event listener
    window.addEventListener('resize', handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount
  return width
}
