function getChai(kind : string | number): string{
    if(typeof kind === 'string'){
        return `Making ${kind} ....`;
    }
    return `Chai order: ${kind}`;
}


// Using truthy values

function serve(msg ?: string): string{
    if(msg){
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}


// Exostive Checks

function order(size : "small" | "medium" | "large" | number): string{
    if(size == "small"){
        return "Making chai";
    }else if(size == "medium" || size == "large"){
        return `Making extra chai`
    }
    return `Making ${size} of chais`;
} 


type chai = {
    type: string,
    sugar: number
}

function isOrderChai(obj : any): obj is chai{
    return(
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function orderChai(item : chai | string): string{
    if(isOrderChai(item)){
        return `Serving the ${item.type}  with ${item.sugar}`;
    }
    return `Serving the ${item}`
}