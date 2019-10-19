import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatAutocompleteModule, 
    MatDatepickerModule, MatInputModule, MatFormFieldModule, 
    MatCardModule, MatRadioModule, MatSelectModule,
    MatSidenavModule, MatToolbarModule, MatGridListModule, 
    MatIconModule, MatSnackBarModule, MatExpansionModule, 
    MatButtonToggleModule, MatProgressBarModule, MatSliderModule,
    MatMenuModule, MatPaginatorModule, MatTableModule} from '@angular/material';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatDatepickerModule, 
    MatAutocompleteModule, MatInputModule, MatFormFieldModule,
     MatCardModule, MatRadioModule, MatSelectModule,
    MatSidenavModule, MatToolbarModule, MatGridListModule, 
    MatIconModule, MatSnackBarModule, MatExpansionModule, 
    MatButtonToggleModule, MatProgressBarModule, MatSliderModule,
    MatMenuModule, MatPaginatorModule, MatTableModule
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatDatepickerModule, 
    MatAutocompleteModule, MatInputModule, MatFormFieldModule, 
    MatCardModule, MatRadioModule, MatSelectModule,
    MatSidenavModule, MatToolbarModule, MatGridListModule,
     MatIconModule, MatSnackBarModule, MatExpansionModule, 
     MatButtonToggleModule, MatProgressBarModule, MatSliderModule,
    MatMenuModule, MatPaginatorModule, MatTableModule],
  declarations: [ContactComponent],
})
export class MaterialModule { }