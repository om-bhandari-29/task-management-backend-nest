import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PGTypeORMconfig } from './config/pgsql.config';

@Module({
  imports: [
    // Establishes database connection using TypeORM with PostgreSQL config
    TypeOrmModule.forRoot(PGTypeORMconfig)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
