import { Args, Query, registerEnumType, Resolver, Mutation } from '@nestjs/graphql'
import { Stream, StreamLesson, StreamLessonInput } from '../../graphql';
import { StreamsService } from './streams.service';

@Resolver(() => Stream)
export class StreamsResolver {
    constructor(private readonly streamsService: StreamsService) {}

    @Query(() => [Stream], {
        name: "streams"
    })
    async streams(@Args('userId') userId: number): Promise<Stream[]> {
        return await this.streamsService.findAll(userId);
    }

    @Query(() => [Stream], {
        name: "stream"
    })
    async stream(@Args('streamId') streamId: number): Promise<Stream> {
        return await this.streamsService.findOne(streamId);
    }

    @Mutation("activateStream")
    async activateStream(@Args('input') streamId: number) {
        return await this.streamsService.activate(streamId)
    }

    @Mutation("closeStream")
    async closeStream(@Args('input') streamId: number) {
        return await this.streamsService.close(streamId)
    }

    @Mutation("restoreStream")
    async restoreStream(@Args('input') streamId: number) {
        return await this.streamsService.restore(streamId)
    }

    @Mutation("addStreamLesson")
    async addStreamLesson(@Args('input') streamLessonInput: StreamLessonInput): Promise<StreamLesson> {
        return await this.streamsService.addLesson({
            theme: streamLessonInput.theme,
            purpose: streamLessonInput.purpose,
            duration: streamLessonInput.duration,
            dueDate: streamLessonInput.dueDate
         }, streamLessonInput.streamId)
    }

}
