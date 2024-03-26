import Image from 'next/image'

import logoRuby from '@/images/test.jpg'

const ImageTest = [
  {
    href: '#',
    name: 'Ruby',
    alt:
      'A dynamic, open source programming language with a focus on simplicity and productivity.',
    logo: logoRuby,
  },
]

export function ImageTests() {
  return (
    <div className="my-16 xl:max-w-none">
      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3 dark:border-white/5">
        {ImageTest.map((library) => (
          <div key={library.name} className="flex flex-row-reverse gap-6">
            <Image
              src={library.logo}
              alt={library.alt}
              className="h-auto w-auto"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}
