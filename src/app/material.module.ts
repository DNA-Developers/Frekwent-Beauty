import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatAutocompleteModule, 
    MatDatepickerModule, MatInputModule, MatFormFieldModule, 
    MatCardModule, MatRadioModule, MatSelectModule,
    MatSidenavModule, MatToolbarModule, MatGridListModule, 
    MatIconModule, MatSnackBarModule, MatExpansionModule, 
    MatButtonToggleModule, MatProgressBarModule, MatSliderModule,
    MatMenuModule, MatPaginatorModule, MatTableModule} from '@angular/material';
<<<<<<< HEAD
import { ContactComponent } from './components/contact/contact.component';
=======
>>>>>>> c3375a793994de8353b21ede771bcafc4fded4fa

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
<<<<<<< HEAD
  declarations: [ContactComponent],
=======
>>>>>>> c3375a793994de8353b21ede771bcafc4fded4fa
})
export class MaterialModule { }