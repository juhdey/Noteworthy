import { Logo } from "@/Logo"

export function NavigationBar() {
  return (
    <nav className="sticky inset-x-0 top-0 z-50 bg-amber-600 shadow dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex h-14 items-center">
          <a className="mr-auto flex items-center gap-2 text-lg font-semibold" href="#">
            <Logo className="w-5 h-5" />
            <span>NOTEWORTHY A CAPPELLA</span>
          </a>
          <nav className="ml-auto flex items-center space-x-4">
            <a
              className="font-medium text-sm border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
              href="#about"
            >
              About Us
            </a>
            <a
              className="font-medium text-sm border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
              href="#favvideo"
            >
              Our Favorite Video
            </a>
            <a
              className="font-medium text-sm border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
              href="#members"
            >
              Members
            </a>
          </nav>
        </div>
      </div>
    </nav>
  )
}
