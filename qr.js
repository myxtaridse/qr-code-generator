const button = document.getElementById('button');
button.addEventListener('click', () => {
    const qrInput = document.getElementById('qr-input').value;
    const qrCode = `<img src="https://api.qrserver.com/v1/create-qr-code/?data=${qrInput}&amp;size=300x300&color=171-7-75&bgcolor=0-0-51" alt="QR Code">`;
    
    //const qrCode = `<img src="https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=100x100" alt="QR Code">`;
    
    document.getElementById('qr-code').innerHTML = qrCode;
    
});