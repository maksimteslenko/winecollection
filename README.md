# WineCollection

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.


## Running
Run `npm install` to install all modules.
This project requires angular to be installed and to be running `ng serve --open`

When the app is launched, it navigates directly to the dashboard: '/dashboard'. This is configured in the AppRoutingModule.Routes array.

## Notes

For navigation I have generated a dashboard component. Dashboard displays top 3 wine bottles from the list.
Classes created: Wine
Components created: Wines, Wine Detail, Dashboard
Modules created: App routing
Services created: Wine Service, In memory data

/dashboard - dashboard view
/wines - wines list
/detail/:id - details of a specific wine

## Features and solutions
List of bottles: Wines component, Wine Service, ngFor in the html, data server
Details view: Wine Detail component, App Routing - parameterized route. It is possible to edit the details: name, year and producer and save those changes.
Add a new bottle:Simulating a data server (a mock server) , CRUD methods in Wine Service

## Future TODOs

Rating system, display top 5 on dashboard. Add comments to wines.