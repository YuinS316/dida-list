import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { DatabaseModule } from '@/common/providers/database/database.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfig } from '@/utils/jwtConfig';
import { UsersModule } from '../users/users.module';
import { BusinessThrownModule } from '@/common/providers/businessThrown/businessThrown.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule,
    DatabaseModule,
    BusinessThrownModule,
    JwtModule.registerAsync(jwtConfig()),
    UsersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
