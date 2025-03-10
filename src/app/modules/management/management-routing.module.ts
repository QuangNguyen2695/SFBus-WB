import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionsComponent } from './pages/options/pages/options/options.component';
import { OptionsValueComponent } from './pages/options/pages/options-value/options-value.component';
import { ManagementComponent } from './management.component';
import { BusTypesComponent } from './pages/bus-types/bus-types.component';
import { BusServicesComponent } from './pages/bus-services/bus-services.component';
import { FilesComponent } from './pages/files-center/files-center.component';
import { BusStationsComponent } from './pages/bus-stations/bus-stations.component';
import { BusProvincesComponent } from './pages/bus-provices/bus-provinces.component';
import { BusSeatTypesComponent } from './pages/bus-seat-types/bus-seat-types.component';
import { BusTemplatesComponent } from './pages/bus-templates/bus-templates.component';
import { BusTemplateDetailComponent } from './pages/bus-templates/pages/bus-template-detail/bus-template-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ManagementComponent,
    children: [
      { path: '', redirectTo: 'options', pathMatch: 'full' },
      {
        path: 'bus-provinves',
        component: BusProvincesComponent,
      },
      {
        path: 'bus-stations',
        component: BusStationsComponent,
      },
      {
        path: 'bus-types',
        component: BusTypesComponent,
      },
      {
        path: 'bus-services',
        component: BusServicesComponent,
      },
      {
        path: 'bus-seat-type',
        component: BusSeatTypesComponent,
      },
      {
        path: 'bus-templates',
        component: BusTemplatesComponent,
      },
      {
        path: 'bus-templates/bus-tempalte-detail',
        component: BusTemplateDetailComponent,
      },
      {
        path: 'media-center',
        component: FilesComponent,
      },
      {
        path: 'options',
        component: OptionsComponent,
      },
      {
        path: 'options-value',
        component: OptionsValueComponent,
      },
      { path: '**', redirectTo: 'errors/404' },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementRoutingModule { }
