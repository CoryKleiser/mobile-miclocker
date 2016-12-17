import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ModalDialogParams } from 'nativescript-angular/directives/dialogs';

@Component({
    moduleId: module.id,
    selector: 'add',
    templateUrl: 'add.component.html'
})
export class AddComponent {

    constructor(private router: RouterExtensions, private params: ModalDialogParams) {
        console.log(params.context.msg);
    }

    public goBack() {
        this.router.back();
    }

    public close() {
        this.params.closeCallback('closed modal');
    }

}