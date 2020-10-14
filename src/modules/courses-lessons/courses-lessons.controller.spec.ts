import { Test, TestingModule } from '@nestjs/testing';
import { CoursesLessonsController } from './courses-lessons.controller';

describe('CoursesLessonsController', () => {
  let controller: CoursesLessonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoursesLessonsController],
    }).compile();

    controller = module.get<CoursesLessonsController>(CoursesLessonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
