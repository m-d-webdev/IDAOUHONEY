import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const FramerMotion_Utils = {
  Popup: {
    init: {
      opacity: 0,
      scale: .6
    },

    exit: {
      opacity: 0,
      scale: 1.2,
      transition: {
        type: "keyframes",
        duration: .12
      }
    },
    anim: {
      opacity: 1,
      scale: 1
    },
  },

  down: {
    init: {
      opacity: .4,
      y: -20
    },

    exit: {
      opacity: 0,
      y: -10,
      transition: {
        type: "keyframes",
        duration: .12
      }
    },
    anim: {
      opacity: 1,
      y: 0
    },
  },
  Bigdown: {
    init: {
      opacity: 0,
      y: -80
    },

    exit: {
      opacity: 0,
      y: -40,
      transition: {
        type: "keyframes",
        duration: .12
      }
    },
    anim: {
      opacity: 1,
      y: 0
    },
  },

  up: {
    init: {
      opacity: .4,
      y: 20
    },

    exit: {
      opacity: 0,
      y: 10,
      transition: {
        type: "keyframes",
        duration: .12
      }
    },
    anim: {
      opacity: 1,
      y: 0
    },
  },
  Bigup: {
    init: {
      opacity: .4,
      y: 80
    },

    exit: {
      opacity: 0,
      y: 40,
      transition: {
        type: "keyframes",
        duration: .12
      }
    },
    anim: {
      opacity: 1,
      y: 0
    },
  }
  ,
  ShowSlowlly: {
    init: {
      opacity: 0,
      // y: 80
    },

    exit: {
      opacity: 0,
      // y: 40,
      transition: {
        type: "keyframes",
        duration: .12
      }
    },
    anim: {
      opacity: 1,
      // y: 0
    },
  }
}



export const FetchContries = (number = 0) => {

  let StringNumer = number.toString();
  const splitedArray = StringNumer.split("");
  let finalArray = [];
  splitedArray.map((m, i) => {
    if (i % 3 == 0 && i < splitedArray.length - 1 && i != 0) {

      console.log(
        {
          i,
          semiCol: "Semi here"
        }
      );

      finalArray.push(",");


    }
    finalArray.push(m)
  })
  return finalArray.join("")
}

export const numberWithSemicolons = (number = 0) => {

  let StringNumer = number.toString();
  const splitedArray = StringNumer.split("");
  let finalArray = [];
  splitedArray.map((m, i) => {
    if (i % 3 == 0 && i < splitedArray.length - 1 && i != 0) {

      console.log(
        {
          i,
          semiCol: "Semi here"
        }
      );

      finalArray.push(",");


    }
    finalArray.push(m)
  })
  return finalArray.join("")
}


export const ReduceNumberwithSomeCols = (num = 0, semisCols = 1) => {
  let res = num.toString();
  if (res.indexOf(".") == -1) return res
  return res = res.substring(0, res.indexOf(".") + semisCols + 1)
}


export const SliceText = ({ text = "", maxLength = 100, className = '' }) => {
  if (text.length <= maxLength) return <p className={className}>{text}</p>;


  let slicedText = text.substring(0, maxLength);
  return <p className={className}>{slicedText} <span className="mx-2">...</span></p>

}