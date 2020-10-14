import { DATABASE_PROVIDER } from 'src/constants'
import { Sequelize } from 'sequelize-typescript'
import { User } from '../modules/users/user.entity'
import { Course } from '../modules/courses/course.entity'
import { Stream } from '../modules/streams/stream.entity'
import { CourseLesson } from '../modules/courses-lessons/course-lesson.entity'
import { StreamLesson } from 'src/modules/streams-lessons/stream-lesson.entity'

export const DatabaseProvider = [{
    provide: DATABASE_PROVIDER,
    useFactory: async(): Promise<Sequelize> => {
        const sequelize = new Sequelize({
            dialect: 'postgres',
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT),
            username: process.env.DB_USER,
            password: process.env.DB_USER_PASSWORD,
            database: process.env.DB_NAME,
            ssl: true,
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            },
        })
        sequelize.addModels([User, Course, Stream, CourseLesson, StreamLesson])
        sequelize.sync()
        return sequelize
    }
}]
