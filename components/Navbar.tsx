import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex item-center justify-center py-6 border-b ">
            <Link href="/">
                <div className="flex items-center cursor-pointer">
                    <Image src="https://nextcourse.in/NextCourse-fav.png" height={35} width={40} />
                    <span className="font-bold ml-2 text-blue-600">
                        NextCourse Blog
                    </span>
                </div>
            </Link>
        </nav>
    );
};

export default Navbar;
