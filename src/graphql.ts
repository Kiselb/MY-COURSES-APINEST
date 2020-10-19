
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CourseInput {
    title: string;
    description: string;
    userId: number;
}

export class StreamInput {
    start?: string;
    finish?: string;
    courseId: number;
    userId: number;
}

export class CourseLessonInput {
    orderNo: number;
    theme: string;
    purpose: string;
    duration: number;
    courseId: number;
    userId: number;
}

export class StreamLessonInput {
    theme: string;
    purpose: string;
    duration: number;
    dueDate: string;
    streamId: number;
}

export class User {
    id: number;
    name: string;
    email: string;
    password: string;
}

export class Course {
    id: number;
    title: string;
    description: string;
    state: string;
    userId: number;
}

export class Stream {
    id: number;
    start?: string;
    finish?: string;
    courseId: number;
    userId: number;
    state: string;
}

export class CourseLesson {
    id: number;
    orderNo: number;
    theme: string;
    purpose: string;
    duration: number;
    courseId: number;
}

export class StreamLesson {
    id: number;
    theme: string;
    purpose: string;
    duration: number;
    dueDate: string;
    streamId: number;
}

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;

    abstract userById(userId: number): User | Promise<User>;

    abstract userByEmail(email: string): User | Promise<User>;

    abstract courses(userId: number): Course[] | Promise<Course[]>;

    abstract course(courseId: number): Course | Promise<Course>;

    abstract streams(userId: number): Stream[] | Promise<Stream[]>;

    abstract stream(streamId: number): Stream | Promise<Stream>;
}

export abstract class IMutation {
    abstract addCourse(input?: CourseInput): Course | Promise<Course>;

    abstract activateCourse(input: number): number[] | Promise<number[]>;

    abstract retireCourse(input: number): number[] | Promise<number[]>;

    abstract restoreCourse(input: number): number[] | Promise<number[]>;

    abstract addStream(input?: StreamInput): Stream | Promise<Stream>;

    abstract addCourseLesson(input?: CourseLessonInput): CourseLesson | Promise<CourseLesson>;

    abstract activateStream(input: number): number[] | Promise<number[]>;

    abstract closeStream(input: number): number[] | Promise<number[]>;

    abstract restoreStream(input: number): number[] | Promise<number[]>;

    abstract addStreamLesson(input?: StreamLessonInput): StreamLesson | Promise<StreamLesson>;
}
