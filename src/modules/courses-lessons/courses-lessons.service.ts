import { Injectable, Inject } from '@nestjs/common';
import { CourseLessonDto } from './dto/course-lesson.dto';
import { CourseLesson } from './course-lesson.entity';
import { COURSELESSON_REPOSITORY } from '../../constants';

@Injectable()
export class CoursesLessonsService {
    constructor(
        @Inject(COURSELESSON_REPOSITORY) private readonly courseLessonRepository: typeof CourseLesson,
        ) { }

    async create(courseLesson: CourseLessonDto, courseId): Promise<CourseLesson> {
        return await this.courseLessonRepository.create<CourseLesson>({ ...courseLesson, courseId })
    }

    async update(courseLesson: CourseLessonDto, courseLessonId) {
        return await this.courseLessonRepository.update({ ...courseLesson }, { where: { id: courseLessonId }})
    }

    async delete(courseLessonId) {
        return await this.courseLessonRepository.destroy({ where: { id: courseLessonId }})
    }

    async findAll(courseId): Promise<CourseLesson[]> {
        return await this.courseLessonRepository.findAll<CourseLesson>({ where: { courseId } })
    }

}
