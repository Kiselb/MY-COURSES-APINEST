import { Args, Query, registerEnumType, Resolver } from '@nestjs/graphql'
import { User } from '../../graphql';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UserResolver {
    constructor(private readonly usersService: UsersService) {}

    @Query(() => [User], {
        name: "users"
    })
    async users(): Promise<User[]> {
        return await this.usersService.findAll();
    }

    @Query(() => [User], {
        name: "userById"
    })
    async userById(@Args('userId') userId: number): Promise<User> {
        return await this.usersService.findOneById(userId);
    }

    @Query(() => [User], {
        name: "userByEmail"
    })
    async userByEmail(@Args('email') email: string): Promise<User> {
        return await this.usersService.findOneByEmail(email);
    }
}
