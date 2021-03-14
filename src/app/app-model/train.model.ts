export class Train {
  constructor(
    public trainNumber: number,
    public trainName: String,
    public source: String,
    public destination: String,
    public trainClass: Array<{ id: number, className: String }>,
    public journeyDay: Array<{ id: number, dayValue: String }>,
    public departure: String,
    public arrival: String,
    public seats: number,
    public fare: Array<number>
  ) { }
}

