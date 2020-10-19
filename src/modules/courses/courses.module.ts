import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { coursesProviders } from './courses.providers';
import { streamsProviders } from '../streams/streams.providers';
import { coursesLessonsProviders } from '../courses-lessons/courses-lessons.provider';
import { CoursesService } from './courses.service';

@Module({
  providers:[CoursesService, ...coursesProviders, ...streamsProviders, ...coursesLessonsProviders],
  controllers: [CoursesController],
  exports: [CoursesService]
})
export class CoursesModule {}
