import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { CoursesModule } from './modules/courses/courses.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, }), DatabaseModule, UsersModule, CoursesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
