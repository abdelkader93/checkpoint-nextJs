import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <nav>
                <Link href="/">Home</Link> |
                <Link href="/About">About</Link> |
                <Link href="/Projects">Projects</Link> |
                <Link href="/Contact">Contact</Link>
            </nav>
        </header>
    );
}
