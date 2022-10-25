import { Field, Int, ObjectType } from '@nestjs/graphql';


@ObjectType({ description: 'Todo quick agregations'})
export class AggregationType {
    
    @Field(() => Int)
    total: number;

    @Field(() => Int)
    pending: number;

    @Field(() => Int)
    completed: number;

    @Field(() => Int, { deprecationReason: 'Use completed instead'})
    allTotalcompleted: number;
}