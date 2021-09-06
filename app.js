const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/65fe2fc1d0cd42e9a4d4bb83f607d9be'));


async function webCommands(){
    const id=await web3.eth.net.getId(); // returns Number: The network ID.
    console.log(id);
    const peer= await web3.eth.net.getPeerCount(); //Get the number of peers connected to.
    console.log(peer);
    const ensOwner= await web3.eth.ens.getOwner('vitalik.eth'); //web3.eth.ens functions let you interacting with ENS
    console.log(ensOwner);
    const checksum= await web3.utils.toChecksumAddress('0xd34Ae54e59E52Bd56ff191bf2d1ff710826C8d3c'); //Will convert an upper or lowercase Ethereum address to a checksum address.
    console.log(checksum);
    const checkChecksum= await web3.utils.checkAddressChecksum('0xd34Ae54e59E52Bd56ff191bf2d1ff710826C8d3c'); //Checks the checksum of a given address. Will also return false on non-checksum addresses.
    console.log(checkChecksum);

}

webCommands()