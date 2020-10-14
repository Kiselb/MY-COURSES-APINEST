import { Inject, Injectable } from '@nestjs/common';
import { STREAMELESSON_REPOSITORY } from 'src/constants';
import { StreamLesson } from './stream-lesson.entity';
import { StreamLessonDto } from './dto/stream-lesson.dto';

@Injectable()
export class StreamsLessonsService {
    constructor(
        @Inject(STREAMELESSON_REPOSITORY) private readonly streamLessonRepository: typeof StreamLesson
    ) {}

    async create(streamLesson: StreamLessonDto, streamId): Promise<StreamLesson> {
        return await this.streamLessonRepository.create<StreamLesson>({ ...streamLesson, streamId })
    }

    async update(streamLesson: StreamLessonDto, streamLessonId) {
        return await this.streamLessonRepository.update({ ...streamLesson }, { where: { id: streamLessonId }})
    }

    async delete(streamLessonId) {
        return await this.streamLessonRepository.destroy({ where: { id: streamLessonId }})
    }

    async findAll(streamId): Promise<StreamLesson[]> {
        return await this.streamLessonRepository.findAll<StreamLesson>({ where: { streamId } })
    }

}
