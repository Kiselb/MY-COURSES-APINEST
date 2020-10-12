import { DATABASE_PROVIDER } from 'src/constants'
import { Sequelize } from 'sequelize-typescript'
import { User } from '../modules/users/user.entity'

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
        sequelize.addModels([User])
        sequelize.sync()
        return sequelize
    }
}]
