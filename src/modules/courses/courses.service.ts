import { Injectable, Inject } from '@nestjs/common';
import { Course } from './course.entity';
import { CourseDto } from './dto/course.dto';
import { User } from '../users/user.entity';
import { Stream } from '../streams/stream.entity';
import { StreamDto } from '../streams/dto/stream.dto';
import { CourseLesson } from '../courses-lessons/course-lesson.entity';
import { CourseLessonDto } from '../courses-lessons/dto/course-lesson.dto';
import { COURSE_REPOSITORY, STREAM_REPOSITORY, COURSELESSON_REPOSITORY } from '../../constants';
import { CourseState } from './course.entity';

@Injectable()
export class CoursesService {
    constructor(
        @Inject(COURSE_REPOSITORY) private readonly courseRepository: typeof Course,
        @Inject(STREAM_REPOSITORY) private readonly streamRepository: typeof Stream,
        @Inject(COURSELESSON_REPOSITORY) private readonly courseLessonRepository: typeof CourseLesson,
        ) { }

    async create(course: CourseDto, userId): Promise<Course> {
        return await this.courseRepository.create<Course>({ ...course, userId })
    }

    async activate(courseId) {
        return await this.courseRepository.update({ state: CourseState.ACTIVE }, { where: { id: courseId }})
    }

    async retire(courseId) {
        return await this.courseRepository.update({ state: CourseState.CLOSED }, { where: { id: courseId }})
    }

    async restore(courseId) {
        return await this.courseRepository.update({ state: CourseState.DRAFT }, { where: { id: courseId }})
    }

    async findAll(userId): Promise<Course[]> {
        return await this.courseRepository.findAll<Course>({ where: { userId } })
    }

    async findOne(courseId): Promise<Course> {
        return await this.courseRepository.findOne<Course>({ where: { id: courseId } })
    }

    async addStream(stream: StreamDto, courseId, userId): Promise<Stream> {
        return await this.streamRepository.create<Stream>({ ...stream, courseId, userId })
    }

    async addLesson(lesson: CourseLessonDto, courseId): Promise<CourseLesson> {
        return await this.courseLessonRepository.create<CourseLesson>({ ...lesson, courseId})
    }

    async updateLesson(lesson: CourseLessonDto, lessonId) {
        return await this.courseLessonRepository.update({ ...lesson }, { where: { id: lessonId }})
    }

    async removeLesson(lessonId) {
        return await this.courseLessonRepository.destroy({ where: { id: lessonId }})
    }
}
