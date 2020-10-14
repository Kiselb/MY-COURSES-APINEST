import { Module } from '@nestjs/common';
import { CoursesLessonsController } from './courses-lessons.controller';
import { CoursesLessonsService } from './courses-lessons.service';
import { coursesLessonsProviders } from './courses-lessons.provider';

@Module({
  controllers: [CoursesLessonsController],
  providers: [CoursesLessonsService, ...coursesLessonsProviders]
})
export class CoursesLessonsModule {}
