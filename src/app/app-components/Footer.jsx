import ThemeToggle from '@/app-components/ThemeToggle'

export function Footer() {
  return (
    <footer className="dark:bg-navy bg-gray-300 shadow-lg">
      <div className="container mx-auto px-2 py-4">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
          <img
            src="/cma.png"
            alt="CMA CGM Logo"
            className="w-20 filter transition-all duration-300 hover:scale-105 md:w-24 lg:h-auto lg:w-28 lg:flex-shrink-0 dark:brightness-0 dark:invert"
          />
          <div className="flex flex-col items-center gap-2 md:flex-1 md:items-start">
            <p className="text-navy text-center text-xs leading-tight font-bold tracking-wide md:text-left md:text-sm lg:text-base xl:text-lg dark:text-white">
              © 2024 CMA CGM GROUP. ALL RIGHTS RESERVED.
            </p>
            <p className="text-center text-xs leading-tight text-gray-600 md:text-left dark:text-gray-300">
              Leading the future of global shipping and logistics
            </p>
          </div>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}
