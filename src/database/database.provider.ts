import { DATABASE_PROVIDER } from 'src/constants'
import { Sequelize } from 'sequelize-typescript'

export const DatabaseProvider = {
    provide: DATABASE_PROVIDER,
    useFactory: async(): Promise<Sequelize> => {
        console.log(process.env.DB_HOST, process.env.DB_PORT, process.env.DB_USER, process.env.DB_USER_PASSWORD, process.env.DB_NAME)
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
        sequelize.addModels([])
        sequelize.sync()
        return sequelize
    }
}
