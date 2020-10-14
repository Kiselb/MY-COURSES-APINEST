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

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule, UsersModule, CoursesModule, AuthModule, StreamsModule, CoursesLessonsModule, StreamsLessonsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
