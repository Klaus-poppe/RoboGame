import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TroopService } from 'src/services/troop.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { BattleComponent } from './battle/battle.component';
import { ResultComponent } from './result/result.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'history', component: HistoryComponent},
  { path: 'battle', component: BattleComponent},
  { path: 'result', component: ResultComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HistoryComponent,
    BattleComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [TroopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
