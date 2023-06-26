import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Utilisateur from "../../interface/Utilisateur";


export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  const utilisateur: Utilisateur[] | null = JSON.parse(sessionStorage.getItem('utilisateur') as string);


  const panier = () => {
    window.location.href = '/Panier';
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="font-sans p-1 font-normal"
      >
        <a href="/" className="flex items-center text-base font-sansl">
          Accueil
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="font-sans p-1 font-normal"
      >
        <a href="/Product" className="flex items-center text-base font-sans">
          Produits
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="font-sans p-1 font-normal"
      >
        {utilisateur === null ?
           <div className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
           <Typography
             as="li"
             variant="small"
             color="blue-gray"
             className="font-sans p-1 font-normal"
           >
             <a href="/Connexion" className="flex items-center text-base font-sans">
               S'inscrire
             </a>
           </Typography>
           <Typography
             as="li"
             variant="small"
             color="blue-gray"
             className="font-sans p-1 font-normal"
           >
             <a href="/Connexion" className="flex items-center text-base font-sans">
               Se connecter
             </a>
           </Typography>
         </div>
          :
          <a href="/Profil" className="flex items-center text-base font-sans">
            Mon profil
          </a>
        }

      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="font-sans mr-4 cursor-pointer py-1.5 font-bold text-xl"
          >
            GreenStock
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Button
              variant="filled"
              size="sm"
              className="hidden lg:inline-block bg-amber-400 text-black text-base"
              onClick={panier}
            >
              <span className="font-sans">Mon panier</span>
            </Button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Button variant="filled" size="sm" fullWidth className="font-sans mb-2 bg-amber-400 text-black text-base">
            <span>Mon panier</span>
          </Button>
        </MobileNav>
      </Navbar>
    </>
  );
}