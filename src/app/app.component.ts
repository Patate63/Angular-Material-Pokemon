import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    isDarkTheme = true;
    pokemon: string[];
    themeClass: string;
    selectedUserType: string;

    constructor() {
        this.pokemon = ['bulbizarre', 'rondoudou', 'pikachu'];
    }

    ngOnInit(): void {
        this.selectedUserType = 'bulbizarre';
        this.themeClass = this.selectedUserType;
    }

    changeTheme(newUserType: string) {
        this.selectedUserType = newUserType;
        this.themeClass = this.selectedUserType + '-theme';
    }


}
