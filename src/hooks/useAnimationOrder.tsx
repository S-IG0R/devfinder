import { useState } from 'react'

const useAnimationOrder = (order: string[]) => {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent(prev => prev + 1)
  };

  return {
    currentAnimation: order[current],
    next
  }
}

export default useAnimationOrder