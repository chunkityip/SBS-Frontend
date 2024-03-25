import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingupComponent } from './basic/components/singup/singup.component';
import { SignupClientComponent } from './basic/components/signup-client/signup-client.component'; // Import SignupClientComponent here
import { DemoNgZorroAntdModule } from './DemoNgZorroAntdModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SignupCompanyomponent } from './basic/components/signup-company/signup-company.component';


@NgModule({
  declarations: [
    AppComponent,
    SingupComponent,
    SignupClientComponent,
    SignupCompanyomponent // Declare SignupClientComponent here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule,
    NzFormModule,
    NzButtonModule // Add NzButtonModule to the imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

