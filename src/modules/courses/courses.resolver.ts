import { Args, Mutation, Query, registerEnumType, Resolver } from '@nestjs/graphql'
import { Course, CourseLesson, CourseLessonInput } from '../../graphql';
import { CoursesService } from './courses.service';

@Resolver(() => Course)
export class CoursesResolver {
    constructor(private readonly coursesService: CoursesService) {}

    @Query(() => [Course], {
        name: "courses"
    })
    async courses(@Args('userId') userId: number): Promise<Course[]> {
        return await this.coursesService.findAll(userId);
    }

    @Query(() => [Course], {
        name: "course"
    })
    async course(@Args('courseId') courseId: number): Promise<Course> {
        return await this.coursesService.findOne(courseId);
    }

    @Mutation("addCourse")
    async addCourse(@Args('input') courseInput: any) {
        return await this.coursesService.create(courseInput, courseInput.userId)
    }

    @Mutation("activateCourse")
    async activateCourse(@Args('input') courseId: number) {
        return await this.coursesService.activate(courseId)
    }

    @Mutation("retireCourse")
    async retireCourse(@Args('input') courseId: number) {
        return await this.coursesService.retire(courseId)
    }

    @Mutation("restoreCourse")
    async restoreCourse(@Args('input') courseId: number) {
        return await this.coursesService.restore(courseId)
    }

    @Mutation("addStream")
    async addStream(@Args('input') streamInput: any) {
        return await this.coursesService.addStream({ start: streamInput.start, finish: streamInput.finish }, streamInput.courseId, streamInput.userId)
    }

    @Mutation("addCourseLesson")
    async addCourseLesson(@Args('input') courseLessonInput: CourseLessonInput): Promise<CourseLesson> {
        return await this.coursesService.addLesson( {
            "orderNo": courseLessonInput.orderNo,
            "theme": courseLessonInput.theme,
            "purpose": courseLessonInput.purpose,
            "duration": courseLessonInput.duration
         }, courseLessonInput.courseId)
    }
}
