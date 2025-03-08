import Link from "next/link";
import NavItem from "@/components/layout/NavItem";
import {Session} from "next-auth";

interface NavBarProps {
    currentUser: Session | null;
}

const NavBar  = ({currentUser} : NavBarProps) => {

        return (
            <header className="relative z-10 w-full bg-orange-500 text-white">
                <div className="flex items-center justify-between mx-5 sm:mx-10 lg:mx-20">
                    <div className="flex items-center text-2xl h-14">
                        <Link href="/">Logo</Link>
                    </div>
                    {/*<div className='text-2xl sm:hidden'>*/}
                    {/*    {menuOpen === false ? <button onClick={handleMenu}>+</button> : <button onClick={handleMenu}>-</button>}*/}
                    {/*</div>*/}
                    <div className='hidden sm:block'>

                        {/*todo 프로젝트 정보*/}
                        <NavItem                            
                            currentUser={currentUser}
                        />
                    </div>
                </div>
                {/*<div className='block sm:hidden'>*/}
                {/*    {(menuOpen === false) ? null : <NavItem mobile />}*/}
                {/*</div>*/}
            </header>
        )
    // }
}

export default NavBar;