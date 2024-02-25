import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrimoComponent } from './primo/primo.component';
import { SecondoComponent } from './secondo/secondo.component';
import { TerzoComponent } from './terzo/terzo.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'primo', component: PrimoComponent},
    {path:'secondo', component: SecondoComponent},
    {path:'terzo', component: TerzoComponent}
    
];
