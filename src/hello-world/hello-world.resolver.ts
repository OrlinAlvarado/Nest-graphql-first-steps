import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
    
    @Query(() =>  String, { description: 'Hola mundo retorna', name: 'hello'})
    helloWorld(): string {
        return 'Hola mundo'
    }

    @Query(() => Float, { name: 'randomNumber'})
    getRandomNumber(): number {
        return Math.random() * 100
    }

    @Query(() => Int, { name: 'getRandomFromZeroTo', description: 'From zero to argument TO(Default 6)'})
    getRandomFromZeroTO( 
        @Args('to', { nullable: true, type: () => Int }) to: number = 6
    ): number {
        return Math.floor(Math.random() * to)
    }


}
