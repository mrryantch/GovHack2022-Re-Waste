export const enum BinType {
    RECYELE,
    LANDFILL,
    ORGANICS
}

const now = new Date();

function getLastWeeksDate() {
    return new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
}

function getLastNumMonthDate(num = 1) {
    return new Date(now.getFullYear(), now.getMonth() - num, now.getDate());
}

export const wasteDataSample = [
    {
        type: BinType.RECYELE,
        amount: 13.0,
        date: now
    },
    {
        type: BinType.RECYELE,
        amount: 3.0,
        date: getLastWeeksDate()
    },
    {
        type: BinType.RECYELE,
        amount: 1.5,
        date: getLastWeeksDate()
    },
    {
        type: BinType.RECYELE,
        amount: 3.4,
        date: getLastNumMonthDate()
    },
    {
        type: BinType.RECYELE,
        amount: 5.6,
        date: getLastNumMonthDate(2)
    },
    {
        type: BinType.ORGANICS,
        amount: 2.0,
        date: now
    },
    {
        type: BinType.ORGANICS,
        amount: 3.4,
        date: getLastWeeksDate()
    },
    {
        type: BinType.ORGANICS,
        amount: 1.7,
        date: getLastNumMonthDate(2)
    },
    {
        type: BinType.LANDFILL,
        amount: 12.0,
        date: now
    },
    {
        type: BinType.LANDFILL,
        amount: 3.7,
        date: getLastWeeksDate()
    },
    {
        type: BinType.LANDFILL,
        amount: 11.5,
        date: getLastNumMonthDate(3)
    }
]