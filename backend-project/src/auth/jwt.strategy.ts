//import { HttpException, HttpStatus } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
export class JwtStrategy extends PassportStrategy(Strategy, `jwt`) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'projetofinaljoao',
    });
  }
  async validate(payload: any) {
    /*
    const foundJwt = await this.authRepository.findByEmail(payload.email);
    if (!foundJwt) {
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          error: 'Not found jwt',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
    */
    return { email: payload.email };
  }
}
