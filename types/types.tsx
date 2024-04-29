
export type product = {
    id: number,
    name: string,
    type_of_clothing: string,
    medium_description: string,
    long_description: string,
    price: number,
    quantity?: number
  }

export type GridParamList = {
    navigate: (
        screen: string,
        {typeOfProduct, productId, name}:{typeOfProduct: string, productId: number, name: string}
    ) => void
};

export type HeaderParamList = {
    navigate: (
        screen: string
    ) => void
};

export type CategoryParamList = {
    navigate: (
        screen:string,
        {titleOfNext}:{titleOfNext: string}
    ) => void
};

export type TypeParamList = {
    navigate: (
        screen:string,
        {typeOfProduct}:{typeOfProduct: string}
    ) => void
};
