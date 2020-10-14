import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../users/user.entity';
import { Course } from '../courses/course.entity';

@Table
export class CourseLesson extends Model<CourseLesson> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;
    
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    orderNo: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    theme: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    purpose: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    duration: number;

    @ForeignKey(() => Course)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    courseId: number;

    @BelongsTo(() => Course)
    course: Course;
}
