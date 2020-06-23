export class Train {

    constructor(
        public trainNumber: number,
        public trainName: string,
        public source: string,
        public destination: string,
        public trainClass: Array<{ id: number, className: string }>,
        public journeyDay: Array<{ id: number, dayValue: string }>,
        public departure: string,
        public arrival: string,
        public seats: number,
        public fare: Array<number>
    ) { }
}

