import { Table, Column, Model, DataType, ForeignKey, BelongsTo, AllowNull } from 'sequelize-typescript';
import { User } from '../users/user.entity';
import { Course } from '../courses/course.entity';

export enum StreamState {
    OPEN = "OPEN",
    ACTIVE = "ACTIVE",
    CLOSED = "CLOSED"
}

@Table
export class Stream extends Model<Stream> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    start: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    finish: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        defaultValue: StreamState.OPEN
    })
    state: StreamState

    @ForeignKey(() => Course)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    courseId: number

    @BelongsTo(() => Course)
    course: Course;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId: number;

    @BelongsTo(() => User)
    user: User;
}
