import {
  Args,
  Authorized,
  FieldResolver,
  Mutation,
  Resolver,
  Root,
} from "type-graphql";
import { Activity, Category } from "@generated/type-graphql";
import { CurrentUser } from "../context";
import prisma from "../lib/prisma";
import { User } from "@prisma/client";
import { ActivityArgs } from "../wire/Activity";

@Resolver(() => Activity)
export default class ActivityResolver {
  @Authorized()
  @Mutation(() => Activity)
  async createActivity(
    @Args() args: ActivityArgs,
    @CurrentUser() user: User
  ): Promise<Activity> {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to the start of the day

    const activity = await prisma.activity.findFirst({
      where: {
        userId: user.id,
        date: {
          gte: today,
          lte: new Date(today.getTime() + 24 * 60 * 60 * 1000), // Add 24 hours
        },
      },
      include: {
        categories: true,
      },
    });

    if (activity) {
      // if the category already exists, update it
      if (activity.categories.find((category) => category.type === args.type)) {
        await prisma.category.update({
          where: {
            id: activity.categories.find(
              (category) => category.type === args.type
            )?.id,
          },
          data: {
            description: args.description,
          },
        });
      } else {
        // otherwise, create it
        await prisma.category.create({
          data: {
            activityId: activity.id,
            type: args.type,
            description: args.description,
          },
        });
      }

      return activity;
    }

    const newActivity = await prisma.activity.create({
      data: {
        userId: user.id,
        date: new Date(),
        categories: {
          create: [
            {
              type: args.type,
              description: args.description,
            },
          ],
        },
      },
    });

    console.log("activity", JSON.stringify(activity, null, 2));

    return newActivity;
  }

  @FieldResolver(() => [Category])
  async categories(@Root() activity: Activity): Promise<Category[]> {
    return prisma.category.findMany({
      where: { activityId: activity.id },
    });
  }
}
