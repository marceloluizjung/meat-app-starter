import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, CanLoad, Route, RouterStateSnapshot } from "@angular/router";
import { FormComponent } from "./form.component";

@Injectable()
export class FormGuard implements CanLoad, CanActivate, CanDeactivate<FormComponent> {

    /**
     * Este serviço serve exclusivamente para guarda de rota, segue abaixo descrição:
     * 
     * canLoad() - Este método responde diretamente ao loadChildren, se você pode ou não carregar esse módulo.
     * canActivate() - Este método responde diretamente ao , se você pode ou não carregar o componente (componentes do módulo).
     * canDeactivate() - Se você tem certeza que quer deixar a página
     */

    canLoad(route: Route): boolean {
        let response = confirm("Você deseja carregar este módulo? (canLoad)");
        return response;
    }

    canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot, routeStateSnapshot: RouterStateSnapshot): boolean {
        let response = confirm("Você deseja carregar este componente? (canActivate)");
        return response;
    }

    canDeactivate(FormComponent: FormComponent ,activatedRouteSnapshot: ActivatedRouteSnapshot, routeStateSnapshot: RouterStateSnapshot): boolean {
        let response = confirm("Você deseja deixar este componente? (canDeactivate)");
        return response;
    }

}