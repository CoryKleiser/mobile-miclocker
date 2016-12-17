import { Component, ViewContainerRef } from '@angular/core';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/directives/dialogs';

import { AddComponent } from '../add/add.component';

@Component({
    moduleId: module.id,
    selector: 'edit',
    templateUrl: 'edit.component.html'
})
export class EditComponent {

    public items: any[] = [
        {
            text: 'c414',
            manufacturer: 'AKG',
            quantity: 1
        },
        {
            text: 'u87',
            manufacturer: 'neumann',
            quantity: 2
        },
        {
            text: 'sm57',
            manufacturer: 'sennheiser',
            quantity: 5
        }
    ];

    constructor(private modal: ModalDialogService, private viewRef: ViewContainerRef) {

    }

    public openModal() {
        let options: ModalDialogOptions = {
            context: { msg: 'Hello' },
            viewContainerRef: this.viewRef
        };
        this.modal.showModal(AddComponent, options).then(
            (result) => {
                console.log(result);
            }
        )
    }

}