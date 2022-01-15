import NavBar  from "./NavBar"
import { useEffect } from "react";
import { useRouter } from "next/router";
import nprogress from "nprogress";
import classNames from "classnames";


const Layout = ({children, title,  footer = true, dark = false}) => {
     const router = useRouter();

    useEffect(()=> {
        const handleRouterChange = url => {
            console.log(url)
            nprogress.start
        }
         

        router.events.on('routeChangeStart', handleRouterChange)
        router.events.on('routeChangeComplete', () => nprogress.done())
    },[])
    return (
<div className={classNames({'bg-dark': dark, 'bg-light' : !dark})}>
      <NavBar />

<main className="container py-4">

    {title &&(
        <h1 className={classNames('text-center',{'text-light': dark })}>{
            title}</h1>
    )}

{children}
</main>

{
    footer &&(
        <footer className="bg-dark text-light text-center">
        <div className="container py-4">
            <h1>&copy; Alexis Gabriel Gomez</h1>
            <p>2021 -{new Date().getFullYear()}</p>
            <p>All Rights Reserverd.</p>
        </div>
        </footer>
    )
}
</div>
)
}
export default Layout;