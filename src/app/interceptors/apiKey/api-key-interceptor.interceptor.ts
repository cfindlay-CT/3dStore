import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const apiKeyInterceptor: HttpInterceptorFn = (req, next) => {
  const apiKey = environment.API_KEY;
  if (apiKey) {
    const cloned = req.clone({
      setHeaders: { 'x-api-key': apiKey }
    });
    return next(cloned);
  }
  return next(req);
};