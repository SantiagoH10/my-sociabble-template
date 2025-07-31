import { MySociabble } from '@/app-components/MySociabble'
import { Footer } from '@/app-components/Footer'
import { LipsumGenerator } from '@/app-components/LipsumGenerator'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MySociabble />
      <LipsumGenerator />
      <Footer />
    </div>
  )
}
