const e = require("cors")

let entries = [
    {
        id: 0,
        date: 'May 21, 2022',
        amount: 64
    }, 
    {
        id: 1,
        date: 'May 22, 2022',
        amount: 40
    }, 
    {
        id: 2,
        date: 'May 23, 2022',
        amount: 80
    }, 
    {
        id: 3,
        date: 'May 24, 2022',
        amount: 72
    }
]

let idTracker = 4

module.exports = {
    getEntries: (req, res) => {
        res.status(200).send(entries)
    },
    addEntry: (req, res) => {
        const {dateInput, amountInput} = req.body 
        entries.push({
            id: idTracker,
            date: dateInput, 
            amount: +amountInput
        })
        res.status(200).send(entries)
    },
    editEntry: (req, res) => {
        const {entryId} = req.params

        // check the data type of the entryId
        console.log(typeof(entryId))
        //find the entry with the id
        // yeilds the wrong data type
        // const index = entries.findIndex(e=> e.id === entryId)

        // get the correct data type
        const index = entries.findIndex(e=> e.id == entryId)
        console.log(index)
        
        entries[index].amount += 8
        
        res.status(200).send(entries)
    },
    deleteEntry: (req, res) => {
        const {entryId} = req.params
        const index = entries.findIndex(e => e.id === +entryId)
        entries.splice(index, 1)
        res.status(200).send(entries)
    }
}