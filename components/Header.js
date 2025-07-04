import Link from 'next/link';

const Header = () => {
    return (
        <header className="mx-auto flex max-w-screen-xl items-center px-3 py-2.5 2xl:max-w-screen-2xl">
            <Link href={'/'} className="mr-auto">
                <div className="relative">
                    <span className="relative z-10 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 >
                        ATS PRO
                    </span>
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="animate-shine absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent bg-[length:200%_100%]" />
                    </div>
                </div>
            </Link>
        </header>
    );
};

export default Header;
