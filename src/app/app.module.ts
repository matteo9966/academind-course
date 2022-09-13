import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { globalReducer } from './globalStore/globalStore.interface';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthEffects } from './auth-store/auth.effects';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { MyRoutingModule } from './routing/routing.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { UsersListComponent } from './user/users-list/users-list.component';
import { UsersEffects } from './user/UserStore/user.effects';
import { FakeBackendInterceptor } from './routing/fake-backend.interceptor';
import { QuoteComponent } from './quote/quote.component';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { metadataMap } from './quote/store/quote.metadata';
import { defaultDataServiceConfig } from './routing/configureRequests';

// import { reducer } from './store/reducers/shopping-list.reducers';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    AuthenticationComponent,
    UserComponent,
    UsersListComponent,
    QuoteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(globalReducer),
    EffectsModule.forRoot([AuthEffects, UsersEffects]),
    EntityDataModule.forRoot({entityMetadata:metadataMap}),
    MyRoutingModule,
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    {provide:DefaultDataServiceConfig,useValue:defaultDataServiceConfig}
    ,
    {
    
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: FakeBackendInterceptor,
    },

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
