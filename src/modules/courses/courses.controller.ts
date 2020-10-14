import { Controller, Get, Post, Put, Patch, Delete, Request, UseGuards, Body, Param } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { AuthGuard } from '@nestjs/passport';
import { CourseDto} from './dto/course.dto'
import { Course as CourseEntity } from './course.entity';
import { StreamDto} from '../streams/dto/stream.dto';
import { Stream as StreamEntity } from '../streams/stream.entity';
import { CourseLessonDto } from '../courses-lessons/dto/course-lesson.dto';
import { CourseLesson } from '../courses-lessons/course-lesson.entity';

@Controller('courses')
export class CoursesController {
    constructor(private readonly courseService: CoursesService) { }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async findAll(@Request() req) {
        return await this.courseService.findAll(req.user.id);
    }
    
    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() course: CourseDto, @Request() req): Promise<CourseEntity> {
        return await this.courseService.create(course, req.user.id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch(':id/activate')
    async activate(@Param('id') id: number) {
        return await this.courseService.activate(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch(':id/retire')
    async retire(@Param('id') id: number) {
        return await this.courseService.retire(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch(':id/restore')
    async restore(@Param('id') id: number) {
        return await this.courseService.restore(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post(':courseId/streams')
    async addStream(@Param('courseId') courseId: number, @Body() stream: StreamDto, @Request() req): Promise<StreamEntity> {
        return await this.courseService.addStream(stream, courseId, req.user.id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post(':courseId/lessons')
    async addLesson(@Param('courseId') courseId: number, @Body() lesson: CourseLessonDto, @Request() req): Promise<CourseLesson> {
        return await this.courseService.addLesson(lesson, courseId);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':courseId/lessons/:lessonId')
    async removeLesson(@Param('lessonId') lessonId: number) {
        return await this.courseService.removeLesson(lessonId);
    }

}
