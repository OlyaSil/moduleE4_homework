class ElectricalAppliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }

    plugIn() {
        this.isPlugged = true;
        console.log(`${this.name} в сети.`);
    }

    unplug() {
        this.isPlugged = false;
        console.log(`${this.name} не в сети.`);
    }
}

class DeskLamp extends ElectricalAppliance {
    constructor(name, power, color) {
        super(name, power);
        this.color = color;
    }

    adjustBrightness(level) {
        console.log(`Яркость ${this.name} установлена на уровень ${level}.`);
    }
}

class Computer extends ElectricalAppliance {
    constructor(name, power, brand) {
        super(name, power);
        this.brand = brand;
    }

    installSoftware(software) {
        console.log(`Для ${this.name} установлено ПО ${software}.`);
    }
}

const lamp = new DeskLamp('Настольная лимпа', 15, 'белая');
const computer = new Computer('ПК', 150, 'Dell');

lamp.plugIn();
computer.plugIn();

lamp.adjustBrightness(5);
computer.installSoftware('Касперский');

function calculateTotalPower(appliances) {
    return appliances.reduce((total, appliance) => {
        return total + (appliance.isPlugged ? appliance.power : 0);
    }, 0);
}

const appliances = [lamp, computer];
const totalPower = calculateTotalPower(appliances);

console.log(`Общее потребление электроэнергии: ${totalPower}W`);
