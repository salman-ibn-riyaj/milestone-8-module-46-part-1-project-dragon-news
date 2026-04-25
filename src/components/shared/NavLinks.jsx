'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavLinks = ({href, children, className}) => {

    const pathName = usePathname();
    return (
        <Link className={`${pathName===href? "border-b-2 border-purple-500":''}`} href={href}>{children}</Link>
    );
};

export default NavLinks;