import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { HttpModule, Http, XHRBackend, Response, ResponseOptions, BaseRequestOptions } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend } from '@angular/http/testing';

import { BASE_URL } from '../../../environments/environment';
import { RatesService } from './rates.service';


describe('RatesService', () => {

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpModule, 
				RouterTestingModule,
		    ],
			providers: [
				RatesService,
				{ provide: XHRBackend, useClass: MockBackend } 
			],
		});
	});

	it('should be created', inject([RatesService], (service: RatesService) => {
		expect(service).toBeTruthy();
	}));

	
	describe('getRates()', () => {
		it('should return a Rates Observable<Object>', fakeAsync(() => {
			inject([RatesService, XHRBackend], (RatesService, mockBackend) => {

				const mockResponse = {
					base: 'USD',
					date: '2018-06-05',
					status: 'OK',
					rates: {
                        'USD': 2.1234,
                        'JPY': 124.2414,
                        'CAD': 13.34
                    }
				};

				mockBackend.connections.subscribe((connection) => {
					connection.mockRespond(new Response(new ResponseOptions({
						body: JSON.stringify(mockResponse),
					})));
				});

				tick();
				RatesService.getRates().subscribe((data) => {
					expect(data.base).toEqual('USD');
					expect(data.status).toEqual('OK');
					expect(data.sdate).toEqual('2018-06-05');
                    expect(data.USD).toEqual(2.1234);
                    expect(data.JPY).toEqual(124.2414);
                    expect(data.CAD).toEqual(13.34);
		        });
			});
		}));
	});	
});
