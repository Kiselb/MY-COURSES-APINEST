import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../users/user.entity';
import { Stream } from '../streams/stream.entity';

@Table
export class StreamLesson extends Model<StreamLesson> {
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

    @Column({
        type: DataType.DATE,
        allowNull: true,
    })
    dueDate: string;

    @ForeignKey(() => Stream)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    streamId: number;

    @BelongsTo(() => Stream)
    stream: Stream;
}
