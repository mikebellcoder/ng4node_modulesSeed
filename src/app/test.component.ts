import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <p>
      test Works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
