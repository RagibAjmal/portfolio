import Link from "next/link"

export default function Footer() {
    return <header>
        <nav>
            <ul>
                <li><Link href="/about">
                    Home</Link></li>
                <li><Link href="/about">
                    About</Link></li>
                <li><Link href="/about">
                    Projects</Link></li>
                <li><Link href="/about">
                    Contact</Link></li>
            </ul>
        </nav>
    </header>
}