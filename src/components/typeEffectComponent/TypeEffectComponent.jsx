import { useRef, useEffect } from "react";
import Typed from "typed.js";



const TypeEffectComponent = ()=>{

    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: [
          "Pushing the technology envelope into uncharted territories?",
          "Can’t-miss deadlines and Impossibly tight budgets?",
          "New product development requests outpacing your team capacity? ",
        ],
        typeSpeed: 30, // Typing speed
        backSpeed: 50, // Backspacing speed
        backDelay: 2000, // Delay after typing a string
        startDelay: 500, // Initial delay before typing starts
        loop: true, // Looping enabled
        cursorChar: "", // Blinking cursor
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);

    return (
        <div className="mt-36 w-full h-60 py-[6%] rounded-[40px] bg-navy-gradient-200 text-wrap">
            <h1 className="text-center poppins-semibold text-[2.5rem] text-[--text-builtIt] ">
              Product challenges? We take them head-on.
            </h1>

            <h3
              className=" poppins-semibold text-[1.8rem] text-center   text-[--text-builtIt] "
              ref={el}
              style={{ whiteSpace: "pre" }}
            ></h3>
          </div>
    )
}

export default TypeEffectComponent;