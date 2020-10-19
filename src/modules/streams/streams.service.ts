import { Injectable, Inject } from '@nestjs/common';
import { Stream } from './stream.entity';
import { StreamDto } from './dto/stream.dto';
import { User } from '../users/user.entity';
import { STREAM_REPOSITORY, STREAMELESSON_REPOSITORY } from '../../constants';
import { StreamState } from './stream.entity';
import { StreamLesson } from '../streams-lessons/stream-lesson.entity';
import { StreamLessonDto } from '../streams-lessons/dto/stream-lesson.dto';

@Injectable()
export class StreamsService {
    constructor(
        @Inject(STREAM_REPOSITORY) private readonly streamRepository: typeof Stream,
        @Inject(STREAMELESSON_REPOSITORY) private readonly streamLessonRepository: typeof StreamLesson,
    ) { }

    async create(stream: StreamDto, courseId, userId): Promise<Stream> {
        return await this.streamRepository.create<Stream>({ ...stream, courseId, userId })
    }

    async activate(streamId) {
        return await this.streamRepository.update({ state: StreamState.ACTIVE }, { where: { id: streamId }})
    }

    async close(streamId) {
        return await this.streamRepository.update({ state: StreamState.CLOSED }, { where: { id: streamId }})
    }

    async restore(streamId) {
        return await this.streamRepository.update({ state: StreamState.OPEN }, { where: { id: streamId }})
    }

    async findAll(userId): Promise<Stream[]> {
        console.log(`UserID: ${userId}`)
        return await this.streamRepository.findAll<Stream>({ where: { userId } })
    }

    async findOne(streamId): Promise<Stream> {
        return await this.streamRepository.findOne<Stream>({ where: { id: streamId } })
    }

    async addLesson(lesson: StreamLessonDto , streamId): Promise<StreamLesson> {
        return await this.streamLessonRepository.create<StreamLesson>({ ...lesson, streamId})
    }

    async updateLesson(lesson: StreamLessonDto, lessonId) {
        return await this.streamLessonRepository.update({ ...lesson }, { where: { id: lessonId }})
    }

    async removeLesson(lessonId) {
        return await this.streamLessonRepository.destroy({ where: { id: lessonId }})
    }
}
