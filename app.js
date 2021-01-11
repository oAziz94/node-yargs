// 1) Import node Core Module

//const fs = require('fs')
// fs.writeFileSync('notes.txt', 'Hello')
//console.log(fs.readFileSync('notes.txt').toString())
//fs.appendFileSync('notes.txt', 'World')

// 2) Import your own files

//const result = require('./data')
//console.log(result(3,5))

// 3) Import node package manager

//const validator = require('validator')
//console.log(validator.isEmail('omar@gmail.com'))

//const chalk = require('chalk')
//console.log(chalk.green.bold('Success'))
//console.log(chalk.red.bold('Error'))

//////////////////////////////////////////////////////////////////////
//const command = process.argv[2]
//if (command === 'add'){
//    console.log('Add Item')
//} else if (command === 'Delete'){
//    console.log('Delete Item')
//} else{
//    console.log('Undefined')
//}

const { triggerAsyncId } = require('async_hooks')
const { string } = require('yargs')
const yargs = require('yargs')
yargs.command({
    command: 'add',
    describe: 'Add note',
    builder:{
        title:{
            describe:'Title of note to be added',
            demandOption:true,
            type: 'string'
        }, 
        body:{
            describe: 'Body of note to be added',
            demandOption:true,
            type: 'string'
        },
    },
    handler: function(argv){
        console.log('Title:  ', argv.title)
        console.log('Body:  ', argv.body)
    }
})

yargs.command({
    command: 'delete',
    describe: 'Delete note',
    builder:{
        title:{
            describe:'Title of note to be deleted',
            demandOption:true,
            type:'string'
        },
    },
    handler: function(){
        console.log('Note has been deleted')
    }
})

yargs.command({
    command: 'list',
    describe: 'List note',
    handler: function(){
        console.log('Note has been listed')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read note',
    builder:{
        title:{
            describe:'Title of note to be deleted',
            demandOption:true,
            type:'string'
        },
    },
    handler: function(){
        console.log('Note has been read')
    }
})

yargs.parse()
