import { Module } from '@nestjs/common';
import { streamsLessonsProviders } from '../streams-lessons/streams-lessons.provider';
import { StreamsController } from './streams.controller';
import { streamsProviders } from './streams.providers';
import { StreamsService } from './streams.service';

@Module({
    providers:[StreamsService, ...streamsProviders, ...streamsLessonsProviders],
    controllers: [StreamsController],
    exports: [StreamsService]
})
export class StreamsModule {}
