import { CategoryType } from "@generated/type-graphql";
import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class ActivityArgs {
  @Field(() => CategoryType)
  type!: CategoryType;

  @Field()
  description!: string;
}
