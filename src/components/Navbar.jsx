import React from "react";





export default function Navbar(props) {




    return (

        <>
        
            <nav className="navbar p-4">
                <div className="navbar-start">
                    <a className="font-1 font-1 font-bold text-2xl">Hicruit</a>
                </div>
                <div className="navbar-center">
                    <div className="menu font-semibold font-1 menu-horizontal gap-5  "> 
                        <a href="/" className="btn-ghost btn">Home</a>
                        <a href="/features" className="btn-ghost btn">Features</a>
                        <a href="/pricing" className="btn-ghost btn">Pricing</a>
                        <a href="/works" className="btn-ghost btn">How it works</a>
                    </div>
                    
                </div>
                <div className="navbar-end">
                    <div className="menu menu-horizontal font-1 gap-2">
                    <a href="/login" className="btn btn-ghost">Login</a>
                    <a href="/signup" className="btn btn-primary">Try now<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
</svg>
</a>
                    </div>
                    

                </div>
                
            </nav>
        
        
        </>
    )
}