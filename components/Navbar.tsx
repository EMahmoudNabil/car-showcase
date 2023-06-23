"use client";

import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";




import CustomButton from "./CustomButton"

import { useEffect, useState } from "react";


const Navbar = () => {
  const { data: session } = useSession();
  console.log(session);
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();

      setProviders(res);
      // console.log(res);
    })();
  }, []);


  return (
    
    <nav className="flex-between w-full mb-16 pt-3 ml-5">
      
        <Link href="/" className="flex justify-center items-center  gap-2">
          <Image src="/logo.svg" alt="Car-Hub-logo" width={118} height={18} className="object-contain "/>
       </Link>





      {/* Desktop Navigation */}
      <div className=" flex relative">
        {session?.user ? (
          <div className="flex ">
           
           <Image
              src={session?.user.image}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              // onClick={() => setToggleDropdown(!toggleDropdown)}
            />
            <CustomButton  
              title=" Sign Out"
              btnType="button"
              containerStyle="text-primary-blue rounded-full bg-white min-w-[130px]"
              handleClick={signOut}
              />

           
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
               

                <CustomButton  
              title="Sign In"
              btnType="button"
              containerStyle="text-primary-blue rounded-full bg-white min-w-[130px]"
                 key={provider.name}
                 handleClick={() => {
                    signIn(provider.id);
                  }}
              />

              ))}
          </>
        )}
      </div>

      
    </nav>


  )
}

export default Navbar
