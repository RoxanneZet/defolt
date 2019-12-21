function main(){
    let name = document.getElementsById('name');
    let subject = document.getElementsById('subject');
    let theme = document.getElementsById('theme');
    let groupNumber = document.getElementsById('class number');
    generate(name, groupNumber, theme)
}

function generate(name = '1', groupNumber = Math.floor(Math.random() * 10), theme = 'WT') {
    console.log(name[0] + groupNumber + theme[0] + Math.floor(Math.random() * 100))
    return name[0] + groupNumber + theme[0] + Math.floor(Math.random() * 100)
}
