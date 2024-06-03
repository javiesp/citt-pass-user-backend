import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRoleModule } from './user-role/user-role.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb+srv://javiesp:Ja22041982@cittpassbd.e658pj0.mongodb.net/',
        retryWrites: true,
        w: 'majority',
      }),
    }),
    UsersModule,
    UserRoleModule,
    RoleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
