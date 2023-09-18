const socket = io();

socket.on('add-product', (data)=>{
    alert(data);
})