import { useContext } from "react"
import { WhatWeDoContext } from "../context/WhatWeDoContext"

export const useGetContext = () => {
    return useContext(WhatWeDoContext)
}