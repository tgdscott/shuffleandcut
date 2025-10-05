import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-midnight/10 bg-white/80 py-8 text-sm text-midnight/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 md:flex-row md:items-center md:justify-between">
        <p>&copy; {new Date().getFullYear()} Shuffle &amp; Cut. Modernizing trading card retail.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="https://www.shuffleandcut.com" target="_blank" rel="noreferrer">
            Retail Storefront
          </Link>
          <Link href="https://www.tcgplayer.com" target="_blank" rel="noreferrer">
            TCGplayer Integration
          </Link>
          <Link href="https://scryfall.com" target="_blank" rel="noreferrer">
            Scryfall Data Source
          </Link>
        </div>
      </div>
    </footer>
  );
}
