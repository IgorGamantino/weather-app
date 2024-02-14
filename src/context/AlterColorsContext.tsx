import { ReactNode, createContext } from "react";

export const AlterColorsContext = createContext({} as AlterColorsContextProps)

type AlterColorsContextProps = {
  hoursNow: number;
}

export function AlterColorsContextProvider ({children}:{children:React.ReactNode}){

  const hoursNow = 18 ;
  return (
    <AlterColorsContext.Provider value={{hoursNow}}>
      {children}
    </AlterColorsContext.Provider>
  )
}