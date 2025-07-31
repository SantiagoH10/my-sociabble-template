export function MySociabble() {
  return (
    <header className="bg-gray-300 shadow-lg dark:bg-indigo-950">
      <div className="container mx-auto px-2 py-4">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
          <img
            src="/cma.png"
            alt="CMA CGM Logo"
            className="w-20 filter transition-all duration-300 hover:scale-105 md:w-24 lg:h-auto lg:w-28 lg:flex-shrink-0 dark:brightness-0 dark:invert"
          />
          <p className="text-center text-xs leading-tight font-bold tracking-wide text-indigo-950 md:text-left md:text-sm lg:text-base xl:text-lg dark:text-white">
            WE IMAGINE BETTER WAYS TO SERVE A WORLD IN MOTION
          </p>
        </div>
      </div>
    </header>
  )
}
