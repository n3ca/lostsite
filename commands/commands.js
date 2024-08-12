function showBoxes(category) {
    const commandBoxes = document.getElementById('command-boxes');
    commandBoxes.innerHTML = ''; 

    let boxesContent = [];

    if (category === 'all') {
        boxesContent = [
            { title: 'Autopost', details: '.autopost' },
            { title: 'Ticket', details: '.setupticket' },
            { title: 'Moderation', details: '.ban @user <reason>' },
            { title: 'Moderation', details: '.kick @user <reason>' },
            { title: 'Moderation', details: '.lock #channel' },
            { title: 'Moderation', details: '.unlock #channel' },
            { title: 'Moderation', details: '.slowmode' },
            { title: 'Moderation', details: '.nuke' },
            { title: 'Info', details: '.userinfo; .ui; .avatar; .av' },
            { title: 'System', details: '.ping; .botinfo; .bi' },
            { title: 'Fun', details: '.hug; .slap; .kiss' }
        ];
    } else if (category === 'autopost') {
        boxesContent = [
            { title: 'Autopfp', details: '.autopost' }
        ];
    } else if (category === 'ticket') {
        boxesContent = [
            { title: 'Ticket', details: '.setupticket' }
        ];
    } else if (category === 'moderation') {
        boxesContent = [
            { title: 'Moderation', details: '.ban @user <reason>' },
            { title: 'Moderation', details: '.kick @user <reason>' },
            { title: 'Moderation', details: '.lock #channel' },
            { title: 'Moderation', details: '.unlock #channel' },
            { title: 'Moderation', details: '.slowmode' },
            { title: 'Moderation', details: '.nuke' }
        ];
    } else if (category === 'info') {
        boxesContent = [
            { title: 'Info', details: '.userinfo' },
            { title: 'Info', details: '.ui' },
            { title: 'Info', details: '.avatar' },
            { title: 'Info', details: '.av' },
            { title: 'Info', details: '.membercount' },
            { title: 'Info', details: '.mc' }
        ];
    } else if (category === 'fun') {
        boxesContent = [
            { title: 'Fun', details: '.kiss' },
            { title: 'Fun', details: '.slap' },
            { title: 'Fun', details: '.hug' },
        ];
    } else if (category === 'system') {
        boxesContent = [
            { title: 'System', details: '.ping' },
            { title: 'System', details: '.botinfo' },
            { title: 'System', details: '.bi' },
        ];
    }

    boxesContent.forEach(boxContent => {
        const box = document.createElement('div');
        box.className = 'col-md-4 command-box';
        box.innerHTML = `
            <h5>${boxContent.title}</h5>
            <p>${boxContent.details}</p>
        `;
        commandBoxes.appendChild(box);
    });

    document.querySelectorAll('.category-item').forEach(item => item.classList.remove('active'));
    document.querySelector(`[onclick="showBoxes('${category}')"]`).classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    showBoxes('all');
});
