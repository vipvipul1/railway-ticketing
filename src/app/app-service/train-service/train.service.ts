import { Train } from '../../app-model/train.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TrainService {
    locations = ['Hyderabad', 'Bangalore', 'Ranchi', 'Patna', 'Delhi', 'Chennai', 'Mumbai', 'Pune', 'Kolkata', 'Jaipur'];

    classList = [
        { id: 0, className: 'All Classes' },
        { id: 1, className: 'Second Sitting (2S)' },
        { id: 2, className: 'Sleeper (SL)' },
        { id: 3, className: 'AC Chair Car (CC)' },
        { id: 4, className: 'AC 3 Tier (3A)' },
        { id: 5, className: 'AC 2 Tier (2A)' },
        { id: 6, className: 'AC First Class (1A)' }
    ];

    dayList = [
        { id: 0, dayValue: 'SUN' },
        { id: 1, dayValue: 'MON' },
        { id: 2, dayValue: 'TUE' },
        { id: 3, dayValue: 'WED' },
        { id: 4, dayValue: 'THU' },
        { id: 5, dayValue: 'FRI' },
        { id: 6, dayValue: 'SAT' },
    ];

    preferenceList = [
        { id: 0, name: 'Upper' },
        { id: 1, name: 'Middle' },
        { id: 2, name: 'Lower' },
        { id: 3, name: 'Side Upper' },
        { id: 4, name: 'Side Lower' },
    ];

    genderList = [
        { id: 0, name: 'Male' },
        { id: 1, name: 'Female' },
        { id: 2, name: 'Other' }
    ];

    foodList = [
        { id: 0, name: 'Veg' },
        { id: 1, name: 'Non-veg' }
    ];

    trains = [
        new Train(11223, 'Shaktipunj Express', this.locations[0], this.locations[1], [
            this.classList[1], this.classList[2]
        ], [
            this.dayList[0], this.dayList[1], this.dayList[2], this.dayList[3], this.dayList[4], this.dayList[5], this.dayList[6]
        ], '04:00', '10:45', 45, [
            650, 750
        ]),

        new Train(23434, 'Coal Field Express', this.locations[0], this.locations[1], [
            this.classList[1], this.classList[3], this.classList[4]
        ], [
            this.dayList[0], this.dayList[2], this.dayList[4],
        ], '04:00', '10:45', 50, [
            620, 750, 980
        ]),

        new Train(11334, 'Satabdhi Express', this.locations[6], this.locations[3], [
            this.classList[1], this.classList[3], this.classList[4], this.classList[5]
        ], [
            this.dayList[1], this.dayList[3], this.dayList[5]
        ], '04:00', '10:45', 30, [
            620, 750, 1050, 1250
        ]),

        new Train(66554, 'Rajdhani Express', this.locations[0], this.locations[9], [
            this.classList[3], this.classList[4], this.classList[5]
        ], [
            this.dayList[1], this.dayList[2], this.dayList[4], this.dayList[5], this.dayList[6]
        ], '04:00', '10:45', 80, [
            750, 880, 1100
        ]),

        new Train(44553, 'Toofan Express', this.locations[2], this.locations[8], [
            this.classList[1], this.classList[4], this.classList[5], this.classList[6]
        ], [
            this.dayList[0], this.dayList[1], this.dayList[2], this.dayList[5], this.dayList[6]
        ], '04:00', '10:45', 70, [
            650, 750, 950, 1300
        ])
    ];
}