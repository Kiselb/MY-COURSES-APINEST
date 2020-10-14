import { Module } from '@nestjs/common';
import { StreamsController } from './streams.controller';
import { streamsProviders } from './streams.providers';
import { StreamsService } from './streams.service';

@Module({
    providers:[StreamsService, ...streamsProviders],
    controllers: [StreamsController]
})
export class StreamsModule {}
