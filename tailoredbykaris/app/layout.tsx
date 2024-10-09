import './globals.css';
import Header from './Header'; 

export const metadata = {
    title: 'Tailored by Karis',
    description: 'A fashion website for tailoredbykaris showing products and services',
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href={metadata.icons.icon} />
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </head>
            <body>
                <Header /> 
                <main>{children}</main>
                <footer>
                    <p>&copy; 2024 Tailored by Karis</p>
                </footer>
            </body>
        </html>
    );
}