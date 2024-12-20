import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';
import { AlumnosDialogComponent } from './alumnos-dialog/alumnos-dialog.component';
import { AlumnosDetailComponent } from './alumnos-detail/alumnos-detail.component';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { alumnosReducer } from './store/alumnos.reducer';
import { AlumnosEffects } from './store/alumnos.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AlumnosComponent,
    AlumnosDialogComponent,
    AlumnosDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AlumnosRoutingModule,
    StoreModule.forFeature('alumnos', alumnosReducer),
    EffectsModule.forFeature([AlumnosEffects]),
  ],
})
export class AlumnosModule {}
