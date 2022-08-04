import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ChildComponent } from './child/child.component';
import { VoterComponent } from './voter/voter.component';
import { TimerComponent } from './timer/timer.component';
import { MissionControlComponent } from './mission-control/mission-control.component';
import { AstronoutComponent } from './astronout/astronout.component';
import { ChildTemplateComponent } from './child-template/child-template.component';
import { ZippYContentDirective } from './zipp-ycontent.directive';
import { ReusableContainerComponent } from './reusable-container/reusable-container.component';
import { ParentContainerComponent } from './conditional-content-projection/parent-container/parent-container.component';
import { ChildElementComponent } from './conditional-content-projection/child-element/child-element.component';
import { ColorGeneratorComponent } from './two-way-binding/color-generator/color-generator.component';
import { ColorContainerComponent } from './two-way-binding/color-container/color-container.component';
import { ColorOutputComponent } from './two-way-binding/color-output/color-output.component';
import { FormsModule } from '@angular/forms';
import { FirstFormComponent } from './first-form/first-form.component';
import { MemoGameComponent } from './memo-game/memo-game.component';
import { ButtonComponent } from './memo-game/button/button.component';
import { HighlightDirectiveDirective } from './highlight-directive.directive';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ChildComponent,
    VoterComponent,
    TimerComponent,
    MissionControlComponent,
    AstronoutComponent,
    ChildTemplateComponent,
    ZippYContentDirective,
    ReusableContainerComponent,
    ParentContainerComponent,
    ChildElementComponent,
    ColorGeneratorComponent,
    ColorContainerComponent,
    ColorOutputComponent,
    FirstFormComponent,
    MemoGameComponent,
    ButtonComponent,
    HighlightDirectiveDirective,
    DirectiveExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
