import { Component, EventEmitter , Output} from "@angular/core";

@Component({
    selector :  'app-header',
    templateUrl: './Header.component.html'
})

export class HeaderComponent{
    @Output() CustomEvent = new EventEmitter<string>();

    chooseSection(section : string){
        this.CustomEvent.emit(section)
    }
}