import Link from 'next/link'

export default function Header() {
    return (
        <header className="border-b border-white">
          Logo
          <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/about/team">Team</Link>
            
          </nav>
        </header>
    )
}