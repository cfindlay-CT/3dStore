import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { provideHttpClient, HttpClient, withInterceptors } from '@angular/common/http';
import { apiKeyInterceptor } from './api-key-interceptor.interceptor';
import { environment } from '../../../environments/environment';

describe('apiKeyInterceptor (HttpInterceptorFn)', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        provideHttpClient(withInterceptors([apiKeyInterceptor]))
      ]
    });
    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should add x-api-key header', () => {
    http.get('/test').subscribe();
    const req = httpMock.expectOne('/test');
    expect(req.request.headers.get('x-api-key')).toBe(environment.API_KEY);
    req.flush({});
  });
});