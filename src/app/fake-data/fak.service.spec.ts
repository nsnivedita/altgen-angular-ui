/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { FakeService } from "./fake.service";

describe("Service: Fak", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeService],
    });
  });

  it("should ...", inject([FakeService], (service: FakeService) => {
    expect(service).toBeTruthy();
  }));
});
