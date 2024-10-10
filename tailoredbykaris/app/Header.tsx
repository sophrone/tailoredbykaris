"use client"; 

import Image from 'next/image';

export default function Header() {
    return (
        <header>
            <nav>
                <div className="logo">
                    <a href="/">
                        <Image
                            src="/logo.png"
                            alt="Tailored by Karis"
                            width={150}
                            height={50}
                            priority
                        />
                    </a>
                </div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/bespoke">TBK Bespoke</a></li>
                    <li><a href="/bridals">Bridals</a></li>
                    <li><a href="/consultations">Consultation</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        </header>
    );
}
