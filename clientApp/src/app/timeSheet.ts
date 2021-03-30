

export interface TimeSheet {
    id: number;
    state: State;
    title: string;
    type: State[];
    duration: Date;
    hourlyRate: number;
    total: number;
}


export interface State {
    name: string;
    code: string;
}