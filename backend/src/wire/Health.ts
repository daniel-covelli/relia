import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class HealthResponse {
  @Field()
  status!: boolean;
}
