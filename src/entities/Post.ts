import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Post {
    
    /* Adding the Field decorator would expose it to
       the graphql schema and then you would be able to
       query it..so you can choose which field to expose
       to the schema based on the Field Decorator
    */
   
    @Field(() => Int)
    @PrimaryKey()
    id!: number;
    
    @Field(() => String)
    @Property({ type: "date" })
    createdAt = new Date();

    @Field(() => String)
    @Property({ onUpdate: () => new Date(), type: "date" })
    updatedAt = new Date();
    
    @Field(() => String)
    @Property({ type: "text" })
    title!: string;

}