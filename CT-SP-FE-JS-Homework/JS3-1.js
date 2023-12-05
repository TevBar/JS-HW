// parking garage class homework below

class parkingGarage {
    constructor(totalTickets, totalSpaces){
        this.tickets = Array.from({length:totalTickets} , (_,index) => index + 1); 
        this.spaces = Array.from({length: totalSpaces}, (_,index) => index + 1);
        this.purchasedTickets = null;
    }

    takeTickets(){
        if(this.tickets.length > 0 && this.spaces.length > 0){
            const ticketNumber = this.tickets.shift();
            const parkingSpace = this.spaces.shift();
            this.currentTicket = {ticketNumber, paid: true}
            console.log(`ticket ${ticketNumber} issued, please park in space ${parkingSpace}.`)
        } else { 
            console.log('sorry, the parking garage is full')
        }
    }

    payForParking(){
        if(this.currentTicket){
            const payment = prompt("Please enter the amount you want to pay");
            if(payment != null){
                this.currentTicket.paid = true;
                console.log('Your ticket has been paid please exit within 15 minutes')
            } else {
                console.log('payment is required to move forward')
            }
        } else { 
            console.log('Please purchase a ticket before paying')
        }
    }

    leaveGarage(){
        if(currentTicket) {
            if(this.currentTicket.paid){
                console.log('Thank you and have a great day!')
            } else { 
                const payment = prompt('Please pay for your ticket prior to leaving')
                if(payment != null){
                    console.log('Thank you and have an amazing day!')
                    this.parkingSpace.push(this.currentTicket.ticketNumber);
                    this.tickets.push(this.currentTicket.ticketNumber);
                    this.currentTicket = null;
                } else { 
                    console.log('Payment is required to move forward')
                }
            }
        } else {
            console.log('No current ticket found, please purchase first')
        }
    }
}


// Example usage:
const parkingGarage = new ParkingGarage(10, 10);

// Simulate a car taking a ticket
parkingGarage.takeTicket();

// Simulate a car paying for parking
parkingGarage.payForParking();

// Simulate a car leaving the garage
parkingGarage.leaveGarage();

