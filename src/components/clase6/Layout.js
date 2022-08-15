import React, { Fragment } from "react"; 

// no tiene mucho sentido implementar Fragment aca ya que no es un ciclo... 
const Layout=({children})=> {
    return (
    
        <Fragment>
         <section className="header">Header</section>
         {children}
         <section className="footer">Footer</section>
        </Fragment>
    )


}

export default Layout; 