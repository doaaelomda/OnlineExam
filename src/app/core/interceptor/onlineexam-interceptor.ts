import { HttpInterceptorFn } from '@angular/common/http';

export const onlineexamInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
