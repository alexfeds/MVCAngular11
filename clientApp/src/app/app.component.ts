import { Component, OnInit, ViewChild } from '@angular/core';
import { State, TimeSheet } from './timeSheet';
import { DropdownModule } from 'primeng/dropdown';
import { formatDate } from "@angular/common";
import { ConfirmationService, MessageService } from 'primeng/api';
import { roundTime, timeToDecimal } from './utils';



@Component({
    selector: 'time-sheet',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ConfirmationService, MessageService]
})
export class AppComponent implements OnInit {
    title = 'time sheet';

    timesheets: TimeSheet[];
    timesheetSecond: TimeSheet[];
    selectedTimeSheet: TimeSheet;

    states: State[];
    jobTypes: State[];
    selectedState: State[] = [];
    selectedJobType: State[] = [];

    hourRate: number;
    duration: Date;
    cellEvent;
    rowIdex: number;

    clonedTimeSheets: { [s: string]: TimeSheet; } = {};


    constructor(private confirmationService: ConfirmationService, private notificationService: MessageService) {

        this.states = [
            { name: 'Active', code: 'active' },
            { name: 'Submitted', code: 'submitted' },
        ];
        this.jobTypes = [
            { name: 'Telephone Call', code: 'call' },
            { name: 'Research', code: 'research' },
            { name: 'Research and Drafting Document', code: 'document' },
        ];

    }

    ngOnInit() {

        //fill in default values for timesheet
        this.timesheets = [
            {
                id: Math.floor(Math.random() * (100 + 1)),
                state: this.states[0],
                title: "",
                type: this.jobTypes,
                duration: null,
                hourlyRate: this.hourRate,
                total: 0
            }
        ]
        this.selectedState = [this.states[0]]
    }


    //called to add new row to top
    addNewRow() {

        //this sheet is added to top
        const timesheetSecond: TimeSheet[] = [
            {
                id: Math.floor(Math.random() * (100 + 1)),
                state: this.states[0],
                title: "",
                type: this.jobTypes,
                duration: null,
                hourlyRate: this.hourRate,
                total: 0
            }]

        this.selectedState = [this.states[0]]

        //remove last item
        this.timesheets.splice(this.timesheets.length, 1);

        //check if hour rate been filled in on the form
        if (this.hourRate) {
            timesheetSecond[0].hourlyRate = this.hourRate;
        }

        // add it to the index with 
        this.timesheets.splice(0, 0, timesheetSecond[0]);

    }


    //colls when row start editted
    rowEdited(event) {

        //sets date from cell
        this.cellEvent = event;

        //check if cell has hourly rate filled in in cell by user
        if (this.cellEvent.data.hourlyRate != null) {
            console.log("well")
            this.calculateRate(event);
        }
    }

    calculateRate(event) {
        if (event) {

            //sets data from cell object
            const cellDuration = this.cellEvent.data.duration;
            const cellHourlyRate = this.cellEvent.data.hourlyRate;
            const rowIndex = this.cellEvent.index;


            //check if either hour filled in in the form on in the cell
            //checks if duration has been provided
            if ((this.hourRate != null && cellDuration) || (cellHourlyRate != null && cellDuration)) {
                console.log("well from cacl")
                //formate date to hh:mm a
                const format = 'h:mm a';
                const locale = 'en-US'
                const formattedDateToTime = formatDate(cellDuration, format, locale); //return time in hh:mm format

                //round to closest 5 minutes
                const roundedTime = roundTime(formattedDateToTime, 15)

                //set time hh:mm to decimal (0.00)
                const timeInDecimal = timeToDecimal(roundedTime);

                let hourByDurationResult;


                //called if hour rate has been filled in the form input
                if (this.hourRate != null && cellHourlyRate == null) {
                    hourByDurationResult = timeInDecimal * this.hourRate;
                    //called if hour rate has been filled in the cell row input
                }
                else if (cellHourlyRate != null) {
                    hourByDurationResult = timeInDecimal * cellHourlyRate;
                }

                //set the calculated result back to total property of the row
                this.timesheets[rowIndex].total = hourByDurationResult;

            }

        }

    }

    deleteRow(index) {
        this.timesheets = this.timesheets.slice(0, index).concat(this.timesheets.slice(index + 1));
    }

    confirmDelete(index) {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to delete row?',
            accept: () => {
                this.deleteRow(index);
            }
        });
    }

    //called when calendar has been closed event
    onClose(event): void {
        this.calculateRate(event);
    }

    // sets row index on row select
    onRowSelect(event) {
        this.rowIdex = event.index
    }

    trackByIndex(index: number, obj: any): any {
        return index;
    }

    //on state dropdown change sets the state to the current data sheet
    onStateDropChange(event) {
        this.timesheets[this.rowIdex].state = event.value;
    }

    submitRow() {
        this.timesheets[this.rowIdex].state = this.states[1];
        this.selectedState[this.rowIdex] = this.states[1];

        this.notificationService.add({ severity: 'success', summary: `Row  ${this.timesheets[this.rowIdex].id} submitted` });
        setTimeout(() => {
            this.notificationService.clear();
        }, 6000);
    }

    unSubmitRow() {
        this.timesheets[this.rowIdex].state = this.states[0];
        this.selectedState[this.rowIdex] = this.states[0];

        this.notificationService.add({ severity: 'success', summary: `Row  ${this.timesheets[this.rowIdex].id} unsubmitted` });
        setTimeout(() => {
            this.notificationService.clear();
        }, 6000);

    }

    //used for changing states of row edit/not edit
    onRowEditInit(timesheet: TimeSheet) {
        this.clonedTimeSheets[timesheet.id] = { ...timesheet };
    }

    onRowDisable(timesheet: TimeSheet) {
        this.clonedTimeSheets[timesheet.id] = { ...timesheet };
    }

    onRowEditCancel(timesheet: TimeSheet, index: number) {
        if (this.timesheetSecond)
            this.timesheetSecond[index] = this.clonedTimeSheets[timesheet.id];
        delete this.timesheetSecond[timesheet.id];
    }


}