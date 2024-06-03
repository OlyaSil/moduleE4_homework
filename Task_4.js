function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

ElectricalAppliance.prototype.plugIn = function() {
    this.isPlugged = true;
    console.log(`${this.name} в сети.`);
};

ElectricalAppliance.prototype.unplug = function() {
    this.isPlugged = false;
    console.log(`${this.name} не в сети.`);
};

function DeskLamp(name, power, color) {
    ElectricalAppliance.call(this, name, power);
    this.color = color;
}

DeskLamp.prototype = Object.create(ElectricalAppliance.prototype);
DeskLamp.prototype.constructor = DeskLamp;

DeskLamp.prototype.adjustBrightness = function(level) {
    console.log(`Яркость ${this.name} установлена на уровне ${level}.`);
};

function Computer(name, power, brand) {
    ElectricalAppliance.call(this, name, power);
    this.brand = brand;
}

Computer.prototype = Object.create(ElectricalAppliance.prototype);
Computer.prototype.constructor = Computer;

Computer.prototype.installSoftware = function(software) {
    console.log(`ПО ${software} установлено для ${this.name}.`);
};

const lamp = new DeskLamp('Лампа', 15, 'белая');
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
