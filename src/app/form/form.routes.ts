import { Routes } from "@angular/router";
import { FormComponent } from "./form.component";
import { FormGuard } from "./form.guard";

export const ROUTES: Routes = [
    { path: '', component: FormComponent, canDeactivate:[FormGuard] },
];
