import {MatButtonModule, MatCheckboxModule, MatFormFieldModule } from '@angular/material';
import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material';
import { MatTableModule } from '@angular/material/table';
 
@NgModule({
    imports:[MatButtonModule, MatCheckboxModule, MatMenuModule,MatCardModule,
            MatInputModule, MatFormFieldModule, MatTableModule],
    exports:[MatButtonModule, MatCheckboxModule, MatMenuModule, MatCardModule, 
            MatInputModule, MatFormFieldModule, MatTableModule]
})
export class MyMaterial{


}