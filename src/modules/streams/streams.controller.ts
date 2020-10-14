import { Controller, Get, Post, Put, Patch, Delete, Request, UseGuards, Body, Param } from '@nestjs/common';
import { StreamsService } from './streams.service';
import { AuthGuard } from '@nestjs/passport';
import { StreamDto} from './dto/stream.dto'
import { Stream as StreamEntity } from './stream.entity';
import { StreamLessonDto } from '../streams-lessons/dto/stream-lesson.dto';
import { StreamLesson } from '../streams-lessons/stream-lesson.entity';

@Controller('streams')
export class StreamsController {
    constructor(private readonly streamsService: StreamsService) { }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async findAll(@Request() req) {
        return await this.streamsService.findAll(req.user.id);
    }
    
    @UseGuards(AuthGuard('jwt'))
    @Patch(':id/activate')
    async activate(@Param('id') id: number) {
        return await this.streamsService.activate(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch(':id/close')
    async retire(@Param('id') id: number) {
        return await this.streamsService.close(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch(':id/restore')
    async restore(@Param('id') id: number) {
        return await this.streamsService.restore(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post(':streamId/lessons')
    async addLesson(@Param('streamId') streamId: number, @Body() lesson: StreamLessonDto, @Request() req): Promise<StreamLesson> {
        return await this.streamsService.addLesson(lesson, streamId);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':streamId/lessons/:lessonId')
    async removeLesson(@Param('lessonId') lessonId: number) {
        return await this.streamsService.removeLesson(lessonId);
    }

}
