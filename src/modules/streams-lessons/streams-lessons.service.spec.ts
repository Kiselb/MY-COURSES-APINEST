import { Test, TestingModule } from '@nestjs/testing';
import { StreamsLessonsService } from './streams-lessons.service';

describe('StreamsLessonsService', () => {
  let service: StreamsLessonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StreamsLessonsService],
    }).compile();

    service = module.get<StreamsLessonsService>(StreamsLessonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
