import React, {useEffect, useState} from "react";




let timeout;
export default function FormError(props) {

    const [currentError, setCurrentError] = useState("")

    useEffect(() => {
        console.log(props.error.split(' '))
        if (props.error.split('![]').length === 2) {
            setCurrentError(props.error.split("![]")[0])
        }
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            
            setCurrentError("");
        },5000)





    }, [props.error])




    return (

        <>
            {currentError!=="" ? <div className="absolute top-0 left-0 w-full z-50 bg-error p-3">
                <p className="text-center font-1">{currentError}</p>
            </div> : <div>
               
            </div>
}
            

        
        
        </>
    )
}