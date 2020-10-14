import { Module } from '@nestjs/common';
import { StreamsLessonsController } from './streams-lessons.controller';
import { StreamsLessonsService } from './streams-lessons.service';
import { streamsLessonsProviders } from './streams-lessons.provider'

@Module({
  controllers: [StreamsLessonsController],
  providers: [StreamsLessonsService, ...streamsLessonsProviders]
})
export class StreamsLessonsModule {}
