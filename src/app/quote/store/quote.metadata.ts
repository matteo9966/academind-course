import { EntityMetadata, EntityMetadataMap } from "@ngrx/data";
import { IQuote } from "../quote.interface";

export const quoteMetadata:EntityMetadata<IQuote> = {
    entityName:'Quote',
    selectId: (entity:IQuote)=>entity.id,
    
    //filter fn
    // sort comparer

}

export const metadataMap:EntityMetadataMap = {
    Quote:quoteMetadata
}