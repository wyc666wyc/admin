
import { ReactNode } from 'react'
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='text-white'>
      <header>1</header>
      <div>{ children }</div>
    </div>
  )
}