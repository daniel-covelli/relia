import { Query, Resolver } from "type-graphql";
import { HealthResponse } from "../wire/Health";

@Resolver()
export default class GeneralResolver {
  @Query(() => HealthResponse)
  health(): HealthResponse {
    return { status: true };
  }
}
