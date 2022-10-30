
declare module "*.css"
declare module "*.scss"



type T_API = {
    foo: (text : string) => void,
    bar: () => number
}

declare interface Window{
    API: T_API
}



