export interface IAmazonProduct
{
    _id : number,
    title : string,
    description : string,
    price : number,
    image : string,
    category : string,
    isNew : string,
    brand : string,
    rating : {
        rate : number,
        count : number
    }
}