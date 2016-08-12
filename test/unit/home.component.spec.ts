/// <reference path="../../typings/index.d.ts" />
import {addProviders,inject} from '@angular/core/testing';
import {HomeComponent} from '../../src/app/home/home.component'
import {HelloService} from '../../src/app/home/service/hello.service'

describe('App', () => {
  beforeEach(() => {
    addProviders([
      HomeComponent, HelloService
    ]);
  });
  it('should work', inject([HomeComponent, HelloService], (service: HelloService) => {
    // Add real test here
    expect(2).toBe(2);
  }));
});