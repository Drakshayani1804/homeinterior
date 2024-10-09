
import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = {
  categories: [
    {
      id: 'Lamps&Lighting',
      name: 'Lamps & Lighting',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://m.media-amazon.com/images/I/81YB2WC3HUL.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Popular',
          href: '#',
          imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTicwwyu6o4gTfOruCzkV_qL6WszQhkqt3LWw&s',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'Ceiling Lights',
          name: 'Ceiling Lights',
          items: [
            { name: 'Ceiling Flush Mounts', href: '#' },
            { name: 'Hanging Lights', href: '#' },
            { name: 'Chandeliers', href: '#' },
         //   { name: 'RHS Sectionals', href: '#' },
           // { name: 'Sofa Cum Beds', href: '#' },
          //  { name: 'T-Shirts', href: '#' },
           // { name: 'Jackets', href: '#' },
            //{ name: 'Activewear', href: '#' },
            //{ name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'Decorative Lights',
          name: 'Decorative Lights',
          items: [
            { name: 'String Lights', href: '#' },
            { name: 'Festive Lights', href: '#' },
            { name: 'Garden Lights', href: '#' },
           // { name: 'Sunglasses', href: '#' },
          //  { name: 'Hats', href: '#' },
           // { name: 'Belts', href: '#' },
          ],
        },

        {
          id: 'Fairy Lights',
          name: 'Fairy Lights',
          items: [
            { name: 'Star String Lights', href: '#' },
            { name: 'Acrylic Lights', href: '#' },
            { name: 'Led Snow Flake Fairy Lights', href: '#' },
           // { name: 'Sunglasses', href: '#' },
          //  { name: 'Hats', href: '#' },
           // { name: 'Belts', href: '#' },
          ],
        },

        {
          id: 'Wall Lights',
          name: 'Wall Lights',
          items: [
            { name: 'Picture Lights', href: '#' },
            { name: 'Spot and Track Lights', href: '#' },
            { name: 'Wall Flush Mounts', href: '#' },
          //  { name: 'Pepperfry', href: '#' },
          //  { name: 'Royaloak', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'Sofas',
      name: 'Sofas',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://s.alicdn.com/@sc04/kf/H48b143e700a5459ba3dd77a49689a298D.jpg_300x300.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          
        },
        {
          name: 'Popular',
          href: '#',
          imageSrc: 'https://luxarts.net/wp-content/uploads/2024/04/luxarts-gorilla-shaped-sofa-9.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'Sofas',
          name: 'Sofas',
          items: [
            { name: '3 Seater Sofas', href: '#' },
            { name: '2 Seater Sofas', href: '#' },
            { name: 'LHS Sectionals', href: '#' },
            { name: 'RHS Sectionals', href: '#' },
           // { name: 'Sofa Cum Beds', href: '#' },
          //  { name: 'T-Shirts', href: '#' },
           // { name: 'Jackets', href: '#' },
            //{ name: 'Activewear', href: '#' },
            //{ name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'Sofa Cum Beds',
          name: 'Sofa Cum Beds',
          items: [
            { name: 'Pull Out Type', href: '#' },
            { name: 'Convertible Type', href: '#' },
           // { name: 'Bags', href: '#' },
           // { name: 'Sunglasses', href: '#' },
          //  { name: 'Hats', href: '#' },
           // { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'Top brands',
          name: 'Top Brands',
          items: [
            { name: 'Duroflex', href: '#' },
            { name: 'Durian', href: '#' },
            { name: 'Woodsworth from', href: '#' },
            { name: 'Pepperfry', href: '#' },
            { name: 'Royaloak', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'Home Decor',
      name: 'Home Decor',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://img.freepik.com/premium-photo/wall-flower-design-interior-home-living-room_616652-1954.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Popular',
          href: '#',
          imageSrc: 'https://antdisplay.com/pub/media/magefan_blog/flower_shop_10_.png',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'Photo Frames',
          name: 'Photo Frames',
          items: [
            { name: 'Single', href: '#' },
            { name: 'College', href: '#' },
            { name: 'Clip', href: '#' },
            { name: 'Polaroid Pic', href: '#' },
          //  { name: 'Jackets', href: '#' },
            //{ name: 'Activewear', href: '#' },
            //{ name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'Wall Art and Paintings',
          name: 'Wall Art and Paintings',
          items: [
            { name: 'Hand Paintings', href: '#' },
            { name: 'Ethnic art', href: '#' },
            { name: 'Art panels', href: '#' },
          //  { name: 'Sunglasses', href: '#' },
          //  { name: 'Hats', href: '#' },
           // { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'Candles & Stands',
          name: 'Candles & Stands',
          items: [
            { name: 'Scented Candles', href: '#' },
            { name: 'Tea light Candles & holders', href: '#' },
            { name: 'Decorative Candles', href: '#' },
            { name: 'Candle Holders', href: '#' },
          ],
        },

        {
          id: 'Mirrors',
          name: 'Mirrors',
          items: [
            { name: 'Floor Mirrors', href: '#' },
            { name: 'Wall Mirrors', href: '#' },
            { name: 'Decorative Mirrors', href: '#' },
            { name: 'Mirror Sets', href: '#' },
          ],
        },

        {
          id: 'Kids Decor',
          name: 'Kids Decor',
          items: [
            { name: 'Mirror Sets', href: '#' },
            { name: 'Wall Art', href: '#' },
            { name: 'Book shells', href: '#' },
            { name: 'Dolls', href: '#' },
          ],
        },

      ],
    },
  ],
  pages: [
    { name: 'Lamps&Lights', href: '#' },
    { name: 'Mattresses', href: '#' },
  ],
}

export default function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                    <div className="grid grid-cols-2 gap-x-4">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                            <img alt={item.imageAlt} src={item.imageSrc} className="object-cover object-center" />
                          </div>
                          <a href={item.href} className="mt-6 block font-medium text-gray-900">
                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                            {item.name}
                          </a>
                          <p aria-hidden="true" className="mt-1">
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                  Sign in
                </a>
              </div>
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                  Create account
                </a>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6">
              <a href="#" className="-m-2 flex items-center p-2">
                <img
                  alt=""
                  src="https://tailwindui.com/img/flags/flag-canada.svg"
                  className="block h-auto w-5 flex-shrink-0"
                />
                <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                <span className="sr-only">, change currency</span>
              </a>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      <div className="relative flex">
                        <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:border-indigo-600 data-[open]:text-indigo-600">
                          {category.name}
                        </PopoverButton>
                      </div>

                      <PopoverPanel
                        transition
                        className="absolute inset-x-0 top-full text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                      >
                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                        <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow" />

                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                {category.featured.map((item) => (
                                  <div key={item.name} className="group relative text-base sm:text-sm">
                                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                      <img
                                        alt={item.imageAlt}
                                        src={item.imageSrc}
                                        className="object-cover object-center"
                                      />
                                    </div>
                                    <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                      <span aria-hidden="true" className="absolute inset-0 z-10" />
                                      {item.name}
                                    </a>
                                    <p aria-hidden="true" className="mt-1">
                                      Shop now
                                    </p>
                                  </div>
                                ))}
                              </div>
                              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                {category.sections.map((section) => (
                                  <div key={section.name}>
                                    <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                      {section.name}
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${section.name}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {section.items.map((item) => (
                                        <li key={item.name} className="flex">
                                          <a href={item.href} className="hover:text-gray-800">
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Sign in
                  </a>
                  <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Create account
                  </a>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                    <img
                      alt=""
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
