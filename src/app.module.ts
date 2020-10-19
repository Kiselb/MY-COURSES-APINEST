import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { CoursesModule } from './modules/courses/courses.module';
import { AuthModule } from './modules/auth/auth.module';
import { StreamsModule } from './modules/streams/streams.module';
import { CoursesLessonsModule } from './modules/courses-lessons/courses-lessons.module';
import { StreamsLessonsModule } from './modules/streams-lessons/streams-lessons.module';
import { GraphQLModule } from '@nestjs/graphql';
import { UserResolver } from './modules/users/users.resolver';
import { CoursesResolver } from './modules/courses/courses.resolver';
import { StreamsResolver } from './modules/streams/streams.resolver';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UsersModule,
    CoursesModule,
    AuthModule,
    StreamsModule,
    CoursesLessonsModule,
    StreamsLessonsModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      typePaths: ['./src/**/*.graphql'],
      definitions: {
        path: 'src/graphql.ts',
        outputAs: 'class',
      },
    }),  
    ],
  controllers: [AppController],
  providers: [AppService, UserResolver, CoursesResolver, StreamsResolver],
})
export class AppModule {}
