export interface Home {
    propertytype?:string;
    totalunits?:number;
    street?: string;
    city ?: string;
    zip ?: string;
    unit ?: number;
    squarefeet ?: string;
    productsneeded ?: string;
    product1 ?:string;
    product1price ?:string;
    product2 ?:string;
    product2price ?:string;
    product3?: string;
    product3price?: string;
    product4?: string;
    product4price?: string;
    product5?: string;
    product5price?: string;
    product6?: string;
    product6price?: string;
    product7?: string;
    product7price?: string;
    product8?: string;
    product8price?: string;
    product9?: string;
    product9price?: string;
    product10?: string;
    product10price?: string;
    product11?: string;
    product11price?: string;
    product12?: string;
    product12price?: string;
    product13?: string;
    product13price?: string;
    ordersprice ?: number;
    addons ?: string;
    addonsprice?: number;
    addon1?: string;
    addon1price?: number;
    addon2?: string;
    addon2price?: number;
    addon3?: string;
    addon3price?: number;
    addon?: {
        Community?:number;
        Twlight?:number;
        RushFee?:number;
    }
    
    lockcode ?: string;
    meet ?: string;
   
    accessproperty ?: string;
    visitingdate ?: string;
    visitingtime ?: number;
    notes ?: string;
    createdby ?:string;
    createdon ?:any;
    comments ?:string;
    price ?: number;
    orderstatus?:string;
    orderedon:Date;
}
