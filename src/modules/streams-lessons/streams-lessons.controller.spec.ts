import { Test, TestingModule } from '@nestjs/testing';
import { StreamsLessonsController } from './streams-lessons.controller';

describe('StreamsLessonsController', () => {
  let controller: StreamsLessonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StreamsLessonsController],
    }).compile();

    controller = module.get<StreamsLessonsController>(StreamsLessonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
