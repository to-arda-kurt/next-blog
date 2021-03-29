import Link from 'next/link'

const Header = () => {
  return (
    <header className="site-container py-6">
      <nav className="space-x-6">
        <Link href="/">
          <a>About</a>
        </Link>
        <Link href="/">
          <a>Works</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
