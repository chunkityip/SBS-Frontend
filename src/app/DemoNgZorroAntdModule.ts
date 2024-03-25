import { NgModule } from '@angular/core';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzAlertModule } from 'ng-zorro-antd/alert';
// Import other NgZorro Ant Design modules here...

@NgModule({
  imports: [
    NzAffixModule,
    NzAlertModule,
    // Other NgZorro Ant Design modules...
  ],
  exports: [
    NzAffixModule,
    NzAlertModule,
    // Other NgZorro Ant Design modules...
  ]
})
export class DemoNgZorroAntdModule { }
